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
		"content": `<style>.mnjm7f6oc {
  fill: var(--svg-color--428bc1, #428bc1);
  d: path("M32 2C15.4 2 2 15.4 2 32h60C62 15.4 48.6 2 32 2");
}

.njnmk37ll {
  fill: var(--svg-color--ffe62e, #ffe62e);
  d: path("M32 62c16.6 0 30-13.4 30-30H2c0 16.6 13.4 30 30 30");
}
</style><path class="njnmk37ll"/><path class="mnjm7f6oc"/>`,
		"fallback": "emojione:flag-for-ukraine",
	});
}

export default Component;
