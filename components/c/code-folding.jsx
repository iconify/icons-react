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
		"content": `<style>.blzqlqn5v {
  d: path("M4.5 2.5h15v19h-15Zm0 9.5h15");
}

.jtkg58beq {
  d: path("M9 6.5L12 9l3-2.5m-6 11l3-2.5l3 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="blzqlqn5v"/><path class="jtkg58beq"/></g>`,
		"fallback": "uix-sharp:code-folding",
	});
}

export default Component;
