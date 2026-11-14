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
		"content": `<style>.exewa_b3e {
  d: path("M2.75 5.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm5.5 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.rnrbxwx9c {
  d: path("M13.3 15.5H2.5V8h11v7.3m4.828-.852L13.5 13v-3l5-1.5v5.78M14.75 18l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="exewa_b3e"/><path class="rnrbxwx9c"/></g>`,
		"fallback": "uix-sharp:cinema-camera-check",
	});
}

export default Component;
