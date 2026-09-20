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
		"content": `<style>.b--mi0m0m {
  d: path("m8 12 6 6 6 -6");
}

.es-ot3p7v {
  d: path("M18 11h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m1muscbxs {
  d: path("m6 11 6 -6 6 6Z");
}

.rvoc0ob8r {
  d: path("M2 11h4");
}

.wkiqe6rhb {
  fill: currentColor;
  d: path("m6 11 6 -6 6 6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="wkiqe6rhb"/><path class="m1muscbxs"/><path class="rvoc0ob8r"/><path class="es-ot3p7v"/><path class="b--mi0m0m"/></g>`,
		"fallback": "iconmind:iceberg-duotone-thin",
	});
}

export default Component;
