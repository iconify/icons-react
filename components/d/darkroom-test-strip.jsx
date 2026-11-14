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
		"content": `<style>.cc93fho8l {
  fill: currentColor;
  d: path("M16.5 8.5H21v7h-4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y53799bik {
  d: path("M3 8.5h18v7H3Zm4.5 0v7m4.5-7v7m2.25-3.5h.01");
}
</style><g class="ulnmmdpxh"><path class="y53799bik"/><path class="cc93fho8l"/></g>`,
		"fallback": "uix-sharp:darkroom-test-strip",
	});
}

export default Component;
