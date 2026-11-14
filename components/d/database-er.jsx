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

.kq8xo7b0j {
  d: path("M3 9.5a5 2 0 0 0 10 0M8 16v2.5h7.75m2.625-3.25h.75a2.625 2.625 0 0 1 2.625 2.625v.75a2.625 2.625 0 0 1-2.625 2.625h-.75a2.625 2.625 0 0 1-2.625-2.625v-.75a2.625 2.625 0 0 1 2.625-2.625");
}

.msqnovtqe {
  d: path("M3 5a5 2 0 1 0 10 0A5 2 0 1 0 3 5");
}

.vck1iacwt {
  d: path("M3 5v9a5 2 0 0 0 10 0V5");
}
</style><g class="hntgybcog"><path class="msqnovtqe"/><path class="vck1iacwt"/><path class="kq8xo7b0j"/></g>`,
		"fallback": "uix:database-er",
	});
}

export default Component;
