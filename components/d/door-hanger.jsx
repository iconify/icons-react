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
		"content": `<style>.gku8f7bgc {
  d: path("M11.5 7.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm0 7.5h5");
}

.tton1ybqh {
  d: path("M4.5 2.5v19M9 2.5h10v19H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tton1ybqh"/><path class="gku8f7bgc"/></g>`,
		"fallback": "uix-sharp:door-hanger",
	});
}

export default Component;
