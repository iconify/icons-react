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
		"content": `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.ucuy3vb4l {
  d: path("M7.5 4.5H4a1.5 1.5 0 0 0 0 3h3.5m0 3H4a1.5 1.5 0 0 0 0 3h3.5m0 3H4a1.5 1.5 0 0 0 0 3h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="ucuy3vb4l"/></g>`,
		"fallback": "uix-sharp:binder-rings",
	});
}

export default Component;
