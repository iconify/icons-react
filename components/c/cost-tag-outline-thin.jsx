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
		"content": `<style>.hgb-t7boy {
  d: path("M6 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v0y09obth {
  d: path("M12 12v4");
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}

.zoz5ar7wf {
  d: path("M9 14a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="w3hyiobto"/><path class="hgb-t7boy"/><path class="zoz5ar7wf"/><path class="v0y09obth"/></g>`,
		"fallback": "iconmind:cost-tag-outline-thin",
	});
}

export default Component;
