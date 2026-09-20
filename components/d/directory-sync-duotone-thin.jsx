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

.exc56819n {
  d: path("m13 13.5 2.5 2.5 2.5 -2.5");
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

.v9y21sbft {
  d: path("M8.5 16v-5h7v5");
}
</style><g class="hntgybcog"><path class="r0jamibkm"/><path class="bn_pu6j-z"/><path class="v9y21sbft"/><path class="exc56819n"/></g>`,
		"fallback": "iconmind:directory-sync-duotone-thin",
	});
}

export default Component;
