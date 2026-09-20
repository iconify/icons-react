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
		"content": `<style>.bvj__8b4y {
  d: path("M20 4v11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.isrkj8blm {
  d: path("M3 17h13");
}

.rrc90qj9p {
  d: path("m18 13 2 2 2 -2");
}

.uilxv67me {
  d: path("M3 11h13");
}

.y-vga5bbj {
  d: path("M3 5h13");
}
</style><g class="hntgybcog"><path class="y-vga5bbj"/><path class="uilxv67me"/><path class="isrkj8blm"/><path class="bvj__8b4y"/><path class="rrc90qj9p"/></g>`,
		"fallback": "iconmind:index-flat-outline-thin",
	});
}

export default Component;
