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
		"content": `<style>.bifprne6g {
  d: path("M12 21.5c-2 0-3-1.5-3-3c0-2 2-3 3-5c1 2 3 3 3 5c0 1.5-1 3-3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vzcvv-b6n {
  d: path("M12 21.5c-4.5 0-7-3-7-6.5c0-4.5 4-6.5 5-12c3.5 2 4 5 3.5 7.5c1.5-1 2-2 2.5-3c2 2 3 5 3 7.5c0 3.5-2.5 6.5-7 6.5");
}
</style><g class="hntgybcog"><path class="vzcvv-b6n"/><path class="bifprne6g"/></g>`,
		"fallback": "uix:hazard-flammable",
	});
}

export default Component;
