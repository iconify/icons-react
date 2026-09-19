import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cyhlalmup {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 51c-11.598 0-21-9.402-21-21s9.402-21 21-21s21 9.402 21 21s-9.401 21-21 21");
}
</style><path class="cyhlalmup"/>`,
		"fallback": "emojione-monotone:hollow-red-circle",
	});
}

export default Component;
