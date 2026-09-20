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
		"content": `<style>.v473h1b8b {
  fill: currentColor;
  d: path("M1 14V9.5h3V14zm4.75 0V8h3v6zm4.75 0V7h3v7zm4.75 0V6h3v8zM20 14V4h3v10zM1 20v-4h3v4zm4.75 0v-4h3v4zm4.75 0v-4h3v4zm4.75 0v-4h3v4zM20 20v-4h3v4z");
}
</style><path class="v473h1b8b"/>`,
		"fallback": "material-symbols:android-cell-dual-5-bar-sharp",
	});
}

export default Component;
