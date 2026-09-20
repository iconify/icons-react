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
		"content": `<style>.kupqwnbur {
  fill: currentColor;
  d: path("M1.5 20v-8h3v8zm6 0V9.5h3V20zm12-7.975V4h3v8.675q-.675-.4-1.437-.562t-1.563-.088M13.5 20V7h3v6.425q-.7.675-1.1 1.6T15 17q0 .85.263 1.613T16 20zm5.5 0v-2h-2v-2h2v-2h2v2h2v2h-2v2z");
}
</style><path class="kupqwnbur"/>`,
		"fallback": "material-symbols:android-cell-4-bar-plus",
	});
}

export default Component;
