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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.dad07l2gi {
  d: path("M7 9h4");
}

.ldq326b0y {
  d: path("M9 7v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.po_hr-bta {
  d: path("M13 15h4");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="ldq326b0y"/><path class="dad07l2gi"/><path class="po_hr-bta"/></g>`,
		"fallback": "iconmind:api-diff-outline-regular",
	});
}

export default Component;
