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
		"content": `<style>.jhl96-b7m {
  d: path("m12 6.25l1 2.5l2.75.25l-2 1.75l.5 2.75L12 12l-2.25 1.5l.5-2.75l-2-1.75L11 8.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_48wv89y {
  d: path("M4.5 3.5h15a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2H10l-4.5 3.5V17h-1a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z");
}
</style><g class="ulnmmdpxh"><path class="v_48wv89y"/><path class="jhl96-b7m"/></g>`,
		"fallback": "uix-sharp:guest-feedback",
	});
}

export default Component;
