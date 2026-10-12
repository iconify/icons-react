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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lpws5cv_a {
  cx: 12px;
  cy: 6.5px;
  r: 3.75px;
}

.oj484ac2v {
  d: path("M4.25 21.25v-2a5.5 5.5 0 0 1 5.5-5.5h4.5a5.5 5.5 0 0 1 5.5 5.5v2ZM15.5 16v3M14 17.5h3");
}
</style><g class="hntgybcog"><circle class="lpws5cv_a"/><path class="oj484ac2v"/></g>`,
		"fallback": "iconoven:first-responder",
	});
}

export default Component;
