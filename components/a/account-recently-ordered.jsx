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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.et264prxl {
  d: path("M12.827 21.087L12 21.5L3 17V7l9-4.5L21 7v5.738");
}

.rbgl54tir {
  d: path("m3 7l9 4.5L21 7m-9 4.5v6.4m0 .2v3.4M7.5 4.75l9 4.5M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="et264prxl"/><path class="rbgl54tir"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:account-recently-ordered",
	});
}

export default Component;
