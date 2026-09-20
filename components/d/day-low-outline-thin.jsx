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
		"content": `<style>.bw1nw8b2t {
  d: path("M10 17.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ltl8_ccdr {
  d: path("M3 6h3");
}

.n3ywj3bst {
  d: path("M19 7v6");
}

.rrzohjbez {
  d: path("M12 12v3");
}

.s5rw9kvzr {
  d: path("M16.5 10.5 19 13l2.5 -2.5");
}

.wmtj7ubjb {
  d: path("M9.5 15V6a2.5 2.5 0 0 1 5 0v9a4.5 4.5 0 1 1 -5 0");
}
</style><g class="hntgybcog"><path class="wmtj7ubjb"/><path class="bw1nw8b2t"/><path class="rrzohjbez"/><path class="n3ywj3bst"/><path class="s5rw9kvzr"/><path class="ltl8_ccdr"/></g>`,
		"fallback": "iconmind:day-low-outline-thin",
	});
}

export default Component;
