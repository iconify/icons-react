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
		"content": `<style>.t0j19b4km {
  fill: currentColor;
  d: path("M1.5 20v-8h3v8zm6 0V9.5h3V20zm6 0V7h3v13zm6 0V4h3v16z");
}
</style><path class="t0j19b4km"/>`,
		"fallback": "material-symbols:android-cell-4-bar-outline-sharp",
	});
}

export default Component;
