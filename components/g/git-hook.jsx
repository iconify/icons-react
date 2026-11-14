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
		"content": `<style>.hex9h-3ie {
  d: path("M14.5 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.umncu1g5k {
  d: path("M16.5 6.25V14a5.5 5.5 0 0 1-11 0v-4m0 0l3 3");
}
</style><g class="ulnmmdpxh"><path class="hex9h-3ie"/><path class="umncu1g5k"/></g>`,
		"fallback": "uix-sharp:git-hook",
	});
}

export default Component;
