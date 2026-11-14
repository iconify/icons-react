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
		"content": `<style>.eu_odhb2n {
  d: path("M18 8h.75A2.25 2.25 0 0 1 21 10.25v7.25a2.5 2.5 0 0 1-2.5 2.5H12m-.25-13L9.5 9.75h3l-2.25 2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xhb_lc9zo {
  d: path("M6.5 4h8A3.5 3.5 0 0 1 18 7.5V12a3.5 3.5 0 0 1-3.5 3.5h-8A3.5 3.5 0 0 1 3 12V7.5A3.5 3.5 0 0 1 6.5 4");
}
</style><g class="hntgybcog"><path class="xhb_lc9zo"/><path class="eu_odhb2n"/></g>`,
		"fallback": "uix:cap-lamp-battery",
	});
}

export default Component;
