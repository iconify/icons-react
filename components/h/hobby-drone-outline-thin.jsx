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
		"content": `<style>.czne32o9r {
  d: path("M7 10h10v5H7Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hu-2z4bvj {
  d: path("M7 11 4 8");
}

.k-pb76bcl {
  d: path("M17 7h5");
}

.offt6_bbf {
  d: path("m17 11 3 -3");
}

.pc1gc3irl {
  d: path("M2 7h5");
}

.tr6mw0eac {
  d: path("M12 15v4");
}
</style><g class="hntgybcog"><path class="czne32o9r"/><path class="hu-2z4bvj"/><path class="offt6_bbf"/><path class="pc1gc3irl"/><path class="k-pb76bcl"/><path class="tr6mw0eac"/></g>`,
		"fallback": "iconmind:hobby-drone-outline-thin",
	});
}

export default Component;
