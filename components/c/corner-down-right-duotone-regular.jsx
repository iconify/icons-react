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
		"content": `<style>.eevbcta0d {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 4v10h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.isvgtub8p {
  d: path("M4 4v10h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oc8iwob6p {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m15 9 5 5 -5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xpi-ctm3k {
  d: path("m15 9 5 5 -5 5");
}
</style><g class="nrj6p8qat"><path class="eevbcta0d"/><path class="oc8iwob6p"/><path class="isvgtub8p"/><path class="xpi-ctm3k"/></g>`,
		"fallback": "iconmind:corner-down-right-duotone-regular",
	});
}

export default Component;
