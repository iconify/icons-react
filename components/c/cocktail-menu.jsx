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
		"content": `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xizmwfb7u {
  d: path("M12 13v-3L7.5 5.5h9L12 10m-2.25 3h4.5M8 16h8m-8 2.75h6");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="xizmwfb7u"/></g>`,
		"fallback": "uix-sharp:cocktail-menu",
	});
}

export default Component;
