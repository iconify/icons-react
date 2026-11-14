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
		"content": `<style>.kipujjbrl {
  d: path("M2.5 3.5h19V8h-19ZM4 8v11.5q0 1.25 1.25 1.25h13.5q1.25 0 1.25-1.25V8");
}

.lhn3cpxsj {
  d: path("m12 17.5l-3-3a2.125 2.125 0 0 1 3-3a2.125 2.125 0 0 1 3 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kipujjbrl"/><path class="lhn3cpxsj"/></g>`,
		"fallback": "uix-sharp:heart-box-chocolates",
	});
}

export default Component;
