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

.nkrv57bmi {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5M16.5 15l-2 3l2 3m3-6l2 3l-2 3");
}

.y3q4v0k2f {
  d: path("M3.5 3v17.5h9.3");
}
</style><g class="hntgybcog"><path class="y3q4v0k2f"/><path class="nkrv57bmi"/></g>`,
		"fallback": "uix:chart-embed",
	});
}

export default Component;
