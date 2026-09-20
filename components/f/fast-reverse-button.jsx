import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qltp1pcqe {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M121.76 29.01L66.84 60.72V29.01L6.24 64l60.6 34.99V67.28l54.92 31.71z");
}
</style><path class="qltp1pcqe"/>`,
		"fallback": "noto-v1:fast-reverse-button",
	});
}

export default Component;
