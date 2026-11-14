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
		"content": `<style>.cj_gqbbkp {
  d: path("M2.5 4.5h19V10a2 2 0 0 0 0 4v5.5h-19V14a2 2 0 0 0 0-4Z");
}

.exiaxz14i {
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0ZM12 7.5v9M7.5 12h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cj_gqbbkp"/><path class="exiaxz14i"/></g>`,
		"fallback": "uix-sharp:fair-ticket",
	});
}

export default Component;
