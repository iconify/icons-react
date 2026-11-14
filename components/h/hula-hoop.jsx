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
		"content": `<style>.hj-k73b8q {
  d: path("M10 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 3.5v7M9 21l3-6.5l3 6.5");
}

.m_67pxbjq {
  d: path("m8 6l4 3l4-3M3.5 13a8.5 2.5 0 1 0 17 0a8.5 2.5 0 1 0-17 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hj-k73b8q"/><path class="m_67pxbjq"/></g>`,
		"fallback": "uix-sharp:hula-hoop",
	});
}

export default Component;
