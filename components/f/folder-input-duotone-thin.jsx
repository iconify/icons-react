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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r0jamibkm {
  fill: currentColor;
  d: path("M20 7v13H4V4h5l3 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vx8cezbmw {
  d: path("M8.5 10.5 11 13l-2.5 2.5");
}

.xnwg5i-fk {
  d: path("M2 13h9");
}
</style><g class="hntgybcog"><path class="r0jamibkm"/><path class="bn_pu6j-z"/><path class="xnwg5i-fk"/><path class="vx8cezbmw"/></g>`,
		"fallback": "iconmind:folder-input-duotone-thin",
	});
}

export default Component;
