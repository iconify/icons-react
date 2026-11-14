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

.j42we8flx {
  d: path("M3.5 6h17M12 3.5v17m-3.5 0h7M5 6v3.5m-3 4h6a3 2.5 0 0 1-6 0M19 6v7.5m-3 0h6a3 2.5 0 0 1-6 0");
}

.rwy8tlbvh {
  d: path("M3 11.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="j42we8flx"/><path class="rwy8tlbvh"/></g>`,
		"fallback": "uix:collateral-ratio",
	});
}

export default Component;
