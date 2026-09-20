import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v20qbbc4w {
  fill: currentColor;
  d: path("M1 18V6h14.9L12 8q-.1 2.8.813 5.563T16.1 18zm17.5-1q-2-.725-3.25-2.95T14 9q1.025-.125 2.125-.625T18.5 7q1.275.875 2.375 1.375T23 9q0 2.825-1.25 5.05T18.5 17m0-2.225q.875-.575 1.5-1.7t.875-2.55q-.575-.2-1.162-.488T18.5 9.375z");
}
</style><path class="v20qbbc4w"/>`,
		"fallback": "material-symbols:battery-android-shield-sharp",
	});
}

export default Component;
