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

.gco2r_19v {
  d: path("m10 11 4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pljtrccyg {
  d: path("m14 11 -4 4");
}
</style><g class="hntgybcog"><path class="bn_pu6j-z"/><path class="gco2r_19v"/><path class="pljtrccyg"/></g>`,
		"fallback": "iconmind:folder-off-outline-thin",
	});
}

export default Component;
