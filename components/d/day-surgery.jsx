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
		"content": `<style>.ka90l1-wp {
  fill: currentColor;
  d: path("M16.25 17.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.n1npu_o6y {
  d: path("M17.75 14.25h.01m2.49 1h.01m.99 2.5h.01m-1.01 2.5h.01m-2.51 1h.01m-2.51-1h.01m-1.01-2.5h.01m.99-2.5h.01");
}

.n21-2_bwv {
  d: path("m9.25 9.25l5.5-4.75c.5-.5 1.25-.5 1.75 0s.5 1.25 0 1.75l-5.5 4.5ZM9 9l-3.5 3c-1.75 1.5-2 3.25-1 4.5l6.25-5.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n21-2_bwv"/><path class="ka90l1-wp"/><path class="n1npu_o6y"/></g>`,
		"fallback": "uix-sharp:day-surgery",
	});
}

export default Component;
