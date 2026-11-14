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
		"content": `<style>.c3wstfbna {
  d: path("M3 10v3a9 5.5 0 0 0 18 0v-3");
}

.l88d_k9mo {
  d: path("m8.5 10l2.5 2.25l4.5-4.5");
}

.le9oa03uf {
  d: path("M3 10a9 5.5 0 1 0 18 0a9 5.5 0 1 0-18 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="le9oa03uf"/><path class="c3wstfbna"/><path class="l88d_k9mo"/></g>`,
		"fallback": "uix-sharp:course-complete",
	});
}

export default Component;
