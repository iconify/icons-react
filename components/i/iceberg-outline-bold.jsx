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

.m1muscbxs {
  d: path("m6 11 6 -6 6 6Z");
}

.rvoc0ob8r {
  d: path("M2 11h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="m1muscbxs"/><path class="rvoc0ob8r"/><path class="es-ot3p7v"/><path class="b--mi0m0m"/></g>`,
		"fallback": "iconmind:iceberg-outline-bold",
	});
}

export default Component;
