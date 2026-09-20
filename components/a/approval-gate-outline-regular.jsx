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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t-mha0g5h {
  d: path("M19.19 8.37a4 4 0 1 1 -3.38 0");
}

.y9cs_mr6x {
  d: path("M2 5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="y9cs_mr6x"/><path class="t-mha0g5h"/></g>`,
		"fallback": "iconmind:approval-gate-outline-regular",
	});
}

export default Component;
