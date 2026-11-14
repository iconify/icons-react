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
		"content": `<style>.bw-q2kpon {
  d: path("m14.5 6.25l2 2l2-2m-4.75 11.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm4.75 2L20.75 22");
}

.o26dd9bxq {
  d: path("M2.5 2.5h19V12h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o26dd9bxq"/><path class="bw-q2kpon"/></g>`,
		"fallback": "uix-sharp:dropdown-search",
	});
}

export default Component;
