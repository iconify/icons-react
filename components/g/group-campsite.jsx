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
		"content": `<style>.c0vkqmhop {
  d: path("M2.5 15.5a4.75 7 0 0 1 9.5 0m0 0a4.75 7 0 0 1 9.5 0m-19 0h19");
}

.lxipt2j1v {
  d: path("m5.5 15.5l1.75-4l1.75 4m6 0l1.75-4l1.75 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c0vkqmhop"/><path class="lxipt2j1v"/></g>`,
		"fallback": "uix-sharp:group-campsite",
	});
}

export default Component;
