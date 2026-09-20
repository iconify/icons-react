import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jo9a94bov {
  fill: currentColor;
  d: path("M14 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m.89-6.705a1.5 1.5 0 0 0-1.78 0L3.61 9.3c-1.164.859-.557 2.707.89 2.707H5v7.242a3.25 3.25 0 0 0-2 3.001v1.5c0 .414.336.75.75.75h20.5a.75.75 0 0 0 .75-.75v-1.5a3.25 3.25 0 0 0-2-3v-7.243h.499c1.448 0 2.055-1.848.89-2.707zM6.5 19v-6.993H9V19zm15-6.993V19H19v-6.993zm-4 0V19h-2.75v-6.993zm-4.25 0V19H10.5v-6.993zm-8.75-1.5L14 3.502l9.499 7.005zm0 11.743c0-.966.784-1.75 1.75-1.75h15.5c.966 0 1.75.784 1.75 1.75V23h-19z");
}
</style><path class="jo9a94bov"/>`,
		"fallback": "fluent:building-bank-28-regular",
	});
}

export default Component;
