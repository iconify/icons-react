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
		"content": `<style>.a0tye7bdm {
  d: path("M9 10h3");
}

.ac5nw33zc {
  d: path("M9 6a3 3 0 0 1 6 0");
}

.b4880zbbv {
  d: path("M9 18h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k_jhlzb9b {
  d: path("M8 6h8c1 5 2 10 2 15H6c0 -5 1 -10 2 -15");
}

.yrhul2brc {
  d: path("M12 14h3");
}
</style><g class="hntgybcog"><path class="k_jhlzb9b"/><path class="ac5nw33zc"/><path class="a0tye7bdm"/><path class="yrhul2brc"/><path class="b4880zbbv"/></g>`,
		"fallback": "iconmind:grater-outline-thin",
	});
}

export default Component;
