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
		"content": `<style>.llqzir1_l {
  d: path("M12 2.75c1.4 1.5 2.2 2.7 2.2 3.85a2.2 2.2 0 0 1-4.4 0c0-1.15.8-2.35 2.2-3.85Zm0 7.5v2M4.75 13h14.5v8.25H4.75z");
}

.npjn27n1y {
  d: path("M4.75 16.25c2.4.9 4.8.9 7.25 0s4.85-.9 7.25 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="llqzir1_l"/><path class="npjn27n1y"/></g>`,
		"fallback": "iconoven:candle-spa-sharp",
	});
}

export default Component;
