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
		"content": `<style>.fzwvrvbkj {
  d: path("M6.5 9h11v12.5h-11Zm2 0l2.75-5.5q.75-1.5 1.5 0L15.5 9");
}

.pep052bmd {
  d: path("M10 13.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.5 4.75h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fzwvrvbkj"/><path class="pep052bmd"/></g>`,
		"fallback": "uix-sharp:backstage-pass",
	});
}

export default Component;
