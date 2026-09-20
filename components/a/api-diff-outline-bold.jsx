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

.po_hr-bta {
  d: path("M13 15h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="ldq326b0y"/><path class="dad07l2gi"/><path class="po_hr-bta"/></g>`,
		"fallback": "iconmind:api-diff-outline-bold",
	});
}

export default Component;
