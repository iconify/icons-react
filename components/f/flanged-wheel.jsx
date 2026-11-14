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
		"content": `<style>.sr8rcvegj {
  d: path("M2.5 17.5h19v3.25h-19ZM7.25 10a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_-mc7bkx {
  d: path("M4.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}
</style><g class="ulnmmdpxh"><path class="v_-mc7bkx"/><path class="sr8rcvegj"/></g>`,
		"fallback": "uix-sharp:flanged-wheel",
	});
}

export default Component;
