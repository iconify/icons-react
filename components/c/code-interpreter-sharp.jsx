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
		"content": `<style>.fj78f9s3o {
  d: path("m6.5 8.5l2.75 2.75L6.5 14m7.15-2.13l3.95 2.26l.65.37l-.65.37l-3.95 2.26l-.65.37v-6z");
}

.pw7p-85ys {
  d: path("M2.75 3.75h18.5v16.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pw7p-85ys"/><path class="fj78f9s3o"/></g>`,
		"fallback": "iconoven:code-interpreter-sharp",
	});
}

export default Component;
