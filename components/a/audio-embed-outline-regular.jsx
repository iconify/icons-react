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
		"content": `<style>.jq9hovbrs {
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uxek6zbgv {
  d: path("M10.5 8H13v2.5");
}

.yomctlb4k {
  d: path("M7 17v4l4 -4");
}

.zu8k75bsf {
  d: path("m8 13 5 -5");
}
</style><g class="nrj6p8qat"><path class="jq9hovbrs"/><path class="yomctlb4k"/><path class="zu8k75bsf"/><path class="uxek6zbgv"/></g>`,
		"fallback": "iconmind:audio-embed-outline-regular",
	});
}

export default Component;
