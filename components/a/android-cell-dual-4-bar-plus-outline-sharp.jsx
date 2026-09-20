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
		"content": `<style>.s6emnddza {
  fill: currentColor;
  d: path("M1.5 14V9.5h3V14zm6 0V8h3v6zm-6 6v-4h3v4zm6 0v-4h3v4zm12-7.975V4h3v8.675q-.675-.4-1.437-.562t-1.563-.088M13.5 20v-4h1.6q-.2 1.05.025 2.088T16 20zm5.5 0v-2h-2v-2h2v-2h2v2h2v2h-2v2zm-5.5-6V6h3v7.425q-.125.125-.25.275L16 14z");
}
</style><path class="s6emnddza"/>`,
		"fallback": "material-symbols:android-cell-dual-4-bar-plus-outline-sharp",
	});
}

export default Component;
