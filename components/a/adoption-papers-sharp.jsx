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
		"content": `<style>.bh4biibbp {
  d: path("M4.75 2.75h14.5v18.5H4.75z");
}

.wpl3490kv {
  d: path("M13.5 6.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-4.25 7.25a2.75 2.75 0 0 1 5.5 0Zm-.75 3.5h7");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bh4biibbp"/><path class="wpl3490kv"/></g>`,
		"fallback": "iconoven:adoption-papers-sharp",
	});
}

export default Component;
