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
		"content": `<style>.k3_2462er {
  d: path("m3.75 8l6.5 3.75v7.75l-6.5-3.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y7vbj5bhv {
  d: path("M13.5 2.5L20 6.25V14l-6.5 3.75V10L7 6.25Zm0 7.5L20 6.25");
}
</style><g class="ulnmmdpxh"><path class="y7vbj5bhv"/><path class="k3_2462er"/></g>`,
		"fallback": "uix-sharp:cube-slice",
	});
}

export default Component;
