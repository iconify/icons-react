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
		"content": `<style>.egda5-rke {
  d: path("M10.5 13.5c0 -4.2 2.8 -7 7 -7 0 4.2 -2.8 7 -7 7");
}

.nbts0_hxp {
  fill: currentColor;
  d: path("M10.5 13.5c0 -4.2 2.8 -7 7 -7 0 4.2 -2.8 7 -7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pywr_yykw {
  d: path("m4 12 8 -8h8v8l-8 8Z");
}

.unu7n2b0o {
  fill: currentColor;
  d: path("m4 12 8 -8h8v8l-8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="unu7n2b0o"/><path class="nbts0_hxp"/><path class="pywr_yykw"/><path class="egda5-rke"/></g>`,
		"fallback": "iconmind:eco-label-duotone-regular",
	});
}

export default Component;
