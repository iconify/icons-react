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
		"content": `<style>.bok4-ne0z {
  d: path("m8 16 8 -8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ik3tfcbzx {
  d: path("M7 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.sim8sii7h {
  d: path("M13 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="o_ssmh9ez"/><path class="bok4-ne0z"/><path class="ik3tfcbzx"/><path class="sim8sii7h"/></g>`,
		"fallback": "iconmind:compound-interest-outline-thin",
	});
}

export default Component;
