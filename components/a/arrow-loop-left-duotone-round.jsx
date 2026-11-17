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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.iz62silpe {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 11a7 7 0 1 1 7 7H5m3-3l-3 3l3 3");
}

.zd7rb_ukv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 11a7 7 0 1 1 7 7H5Z");
}
</style><g class="ft5dv1b6b"><path class="zd7rb_ukv"/><path class="iz62silpe"/></g>`,
		"fallback": "coolicons:arrow-loop-left-duotone-round",
	});
}

export default Component;
