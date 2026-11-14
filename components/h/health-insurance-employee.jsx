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
		"content": `<style>.gv_5vhgjt {
  d: path("M7.75 3.75h8.5A1.75 1.75 0 0 1 18 5.5v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 6 10.5v-5a1.75 1.75 0 0 1 1.75-1.75M9 8h.01M12 6.5h3m-3 3h3");
}

.hai3wsu8z {
  d: path("M3 2.5v7a9 7.5 0 0 0 18 0v-7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r8sbut5kj {
  d: path("M12 17v.75a2 2 0 0 0 2 2h2.75m0 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="gv_5vhgjt"/><path class="hai3wsu8z"/><path class="r8sbut5kj"/></g>`,
		"fallback": "uix:health-insurance-employee",
	});
}

export default Component;
