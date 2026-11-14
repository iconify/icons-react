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
		"content": `<style>.fsa3uxuxy {
  d: path("M5.5 12a6.5 4.25 0 1 0 13 0a6.5 4.25 0 1 0-13 0Zm6.5 0h.01");
}

.p--ewqbry {
  d: path("M2.25 12a9.75 7 0 1 0 19.5 0a9.75 7 0 1 0-19.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p--ewqbry"/><path class="fsa3uxuxy"/></g>`,
		"fallback": "uix-sharp:elliptical-galaxy",
	});
}

export default Component;
