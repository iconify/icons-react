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
		"content": `<style>.abqnffbdc {
  d: path("m2.5 11l4-5h15v7l-5 5h-14Z");
}

.r_u5cjb_d {
  d: path("M2.5 11h14l5-5m-5 5v7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="abqnffbdc"/><path class="r_u5cjb_d"/></g>`,
		"fallback": "uix-sharp:brick",
	});
}

export default Component;
