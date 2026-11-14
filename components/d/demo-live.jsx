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

.j0myc384o {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v6.5A3.5 3.5 0 0 1 18 17H6a3.5 3.5 0 0 1-3.5-3.5V7A3.5 3.5 0 0 1 6 3.5M12 17v3.5m-4 0h8");
}

.splpyubeo {
  d: path("m11.819 8.013l1.504.981a1.5 1.5 0 0 1 0 2.512l-1.504.981A1.5 1.5 0 0 1 9.5 11.231V9.269a1.5 1.5 0 0 1 2.319-1.256M18.5 6.5h.01");
}
</style><g class="hntgybcog"><path class="j0myc384o"/><path class="splpyubeo"/></g>`,
		"fallback": "uix:demo-live",
	});
}

export default Component;
