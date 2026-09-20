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
		"content": `<style>.afe35-b1h {
  d: path("M9 17h5");
}

.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.fdrffh_te {
  d: path("M9 13h5");
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

.xgrnk0bjr {
  d: path("M9 10v7");
}
</style><g class="hntgybcog"><path class="r0jamibkm"/><path class="bn_pu6j-z"/><path class="xgrnk0bjr"/><path class="fdrffh_te"/><path class="afe35-b1h"/></g>`,
		"fallback": "iconmind:folder-tree-duotone-thin",
	});
}

export default Component;
