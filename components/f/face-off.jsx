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
		"content": `<style>.d-zm0gbrw {
  d: path("M6.5 2.5L17 18h4");
}

.fx8cznbxj {
  d: path("M17.5 2.5L7 18H3");
}

.kog58l_5y {
  fill: currentColor;
  d: path("M9.75 19.5a2.25 1.5 0 1 0 4.5 0a2.25 1.5 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d-zm0gbrw"/><path class="fx8cznbxj"/><path class="kog58l_5y"/></g>`,
		"fallback": "uix-sharp:face-off",
	});
}

export default Component;
