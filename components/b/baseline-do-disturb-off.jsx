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
		"content": `<style>.nnyg7zfam {
  fill: currentColor;
  d: path("M17 11v2h-1.17l4.51 4.51A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10c-2.04 0-3.93.61-5.51 1.66L13.83 11zM1.39 4.22l2.27 2.27A9.9 9.9 0 0 0 2 12c0 5.52 4.48 10 10 10c2.04 0 3.93-.61 5.51-1.66l2.27 2.27l1.41-1.41L2.81 2.81zM7 11h1.17l2 2H7z");
}
</style><path class="nnyg7zfam"/>`,
		"fallback": "ic:baseline-do-disturb-off",
	});
}

export default Component;
