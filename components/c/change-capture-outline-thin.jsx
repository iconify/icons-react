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

.k6nj2fbya {
  d: path("M3 5h18");
}

.o_qgmvj5j {
  d: path("m20 13 -3 3h2.5l-3 3");
}

.u1mon9cdo {
  d: path("M3 15h9");
}

.x50q_4bdr {
  d: path("M3 10h18");
}
</style><g class="hntgybcog"><path class="k6nj2fbya"/><path class="x50q_4bdr"/><path class="u1mon9cdo"/><path class="o_qgmvj5j"/></g>`,
		"fallback": "iconmind:change-capture-outline-thin",
	});
}

export default Component;
