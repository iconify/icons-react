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
		"content": `<style>.bl0be0bup {
  d: path("M5 4q7-1.5 14 0q2.5 8 0 16q-7 1.5-14 0q-2.5-8 0-16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zhpah5b7y {
  d: path("M6.5 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="bl0be0bup"/><path class="zhpah5b7y"/></g>`,
		"fallback": "uix-sharp:changing-bag",
	});
}

export default Component;
