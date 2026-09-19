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
		"content": `<style>.mxamjib1o {
  fill: var(--svg-color--2a5f9e, #2a5f9e);
  d: path("M62 32H2c0 5.5 1.5 10.6 4 15h52c2.6-4.4 4-9.5 4-15");
}

.vtd0aubir {
  fill: var(--svg-color--ffe62e, #ffe62e);
  d: path("M32 2C15.5 2 2 15.4 2 32h60C62 15.4 48.6 2 32 2");
}

.wpsikub0m {
  fill: var(--svg-color--ed4c5c, #ed4c5c);
  d: path("M32 62c11.1 0 20.8-6 26-15H6c5.3 9 14.9 15 26 15");
}
</style><path class="mxamjib1o"/><path class="vtd0aubir"/><path class="wpsikub0m"/>`,
		"fallback": "emojione:flag-for-flag-colombia",
	});
}

export default Component;
