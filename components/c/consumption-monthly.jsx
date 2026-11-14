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
		"content": `<style>.sz6zv-bne {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5M14 15h8v7h-8Zm0 3h8m-5.5-4.75v3m3-3v3");
}

.ubifyzbew {
  d: path("M3.5 3v17.5h7.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ubifyzbew"/><path class="sz6zv-bne"/></g>`,
		"fallback": "uix-sharp:consumption-monthly",
	});
}

export default Component;
