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
		"content": `<style>.a0y77nbtb {
  d: path("M14.25 13.25V11a2.25 2.25 0 0 1 4.5 0v2.25m-6 0h7.5v8h-7.5zm3.75 3V18");
}

.sxsey2b_i {
  d: path("m8.9 5.16l.89.89l.959.794l1.76-1.76l-.959-.794l-.89-.89l-.959-.794l-1.76 1.76zm2.65.89l.71.71m0 1.76l.89.89l.959.794l1.76-1.76l-.959-.794l-.89-.89l-.959-.794l-1.76 1.76z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sxsey2b_i"/><path class="a0y77nbtb"/></g>`,
		"fallback": "iconoven:chain-padlock-sharp",
	});
}

export default Component;
