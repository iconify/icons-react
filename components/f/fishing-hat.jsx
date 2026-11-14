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
		"content": `<style>.k0tdkjb-n {
  d: path("M6.5 14L8 6a2 2 0 0 1 2-1.5h4A2 2 0 0 1 16 6l1.5 8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yin7axi4s {
  d: path("M2.5 15.5a9.5 3 0 1 0 19 0a9.5 3 0 1 0-19 0Zm5-5h9");
}
</style><g class="ulnmmdpxh"><path class="k0tdkjb-n"/><path class="yin7axi4s"/></g>`,
		"fallback": "uix-sharp:fishing-hat",
	});
}

export default Component;
