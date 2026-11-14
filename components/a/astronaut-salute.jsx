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
		"content": `<style>.jbo2ibbko {
  d: path("M7.75 5.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm-.75 6h8v6H7Zm2 6v4m4-4v4M7 14l-2.5 3");
}

.mewl0mb5m {
  d: path("m15 14l3.5-3.5L14.25 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jbo2ibbko"/><path class="mewl0mb5m"/></g>`,
		"fallback": "uix-sharp:astronaut-salute",
	});
}

export default Component;
