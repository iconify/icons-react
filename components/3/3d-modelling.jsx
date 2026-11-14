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
		"content": `<style>.enjznc75v {
  d: path("m12 6.25l3.25 2v3.5l-3.25 2l-3.25-2v-3.5Z");
}

.iau37ab1m {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_hslublf {
  d: path("m8.75 8.25l3.25 2l3.25-2m-3.25 2v3.5");
}
</style><g class="ulnmmdpxh"><path class="iau37ab1m"/><path class="enjznc75v"/><path class="v_hslublf"/></g>`,
		"fallback": "uix-sharp:3d-modelling",
	});
}

export default Component;
