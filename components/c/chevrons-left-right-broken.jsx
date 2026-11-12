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
		"content": `<style>.bfthykebc {
  d: path("M7.5 7.5L9 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n6rbqf0vy {
  d: path("M4.5 10.5L3 12L9 18");
}

.p6h4xl3fg {
  d: path("M19.5 10.5L21 12L15 18");
}

.wtmily5br {
  d: path("M16.5 7.5L15 6");
}
</style><g class="hntgybcog"><path class="p6h4xl3fg"/><path class="wtmily5br"/><path class="n6rbqf0vy"/><path class="bfthykebc"/></g>`,
		"fallback": "solar:chevrons-left-right-broken",
	});
}

export default Component;
