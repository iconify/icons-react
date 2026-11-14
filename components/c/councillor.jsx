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
		"content": `<style>.rg7ll32gb {
  d: path("M13.25 18.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.s1d6dyb7o {
  d: path("M8.25 6.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm-3.75 15c0-5 3.5-8 7.5-8s7.5 3 7.5 8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s1d6dyb7o"/><path class="rg7ll32gb"/></g>`,
		"fallback": "uix-sharp:councillor",
	});
}

export default Component;
