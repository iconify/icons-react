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
		"content": `<style>.carm-3b9v {
  d: path("M8.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vw6a0jbyp {
  d: path("M12 15v6.5m0-6.5L6 9Q5 6 8.5 6m3.5 9l6-6q1-3-2.5-3");
}
</style><g class="ulnmmdpxh"><path class="vw6a0jbyp"/><path class="carm-3b9v"/></g>`,
		"fallback": "uix-sharp:antibody-binding",
	});
}

export default Component;
