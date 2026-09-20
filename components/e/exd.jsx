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
		"content": `<style>.ef_kgbbrh {
  fill: var(--svg-color--ec793e, #ec793e);
  d: path("M5.4 3h4.8v18H5.4z");
}

.ft5dv1b6b {
  fill: none;
}

.i5b-c6tma {
  fill: var(--svg-color--0d1122, #0d1122);
  d: path("M18.6 3h-7.8l7.8 7.2zm0 18v-7.2L10.8 21z");
}
</style><g class="ft5dv1b6b"><path class="ef_kgbbrh"/><path class="i5b-c6tma"/></g>`,
		"fallback": "token-branded:exd",
	});
}

export default Component;
