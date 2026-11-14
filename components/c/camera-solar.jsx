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
		"content": `<style>.f-l6j_4er {
  d: path("M7.25 3H17a1.5 1.5 0 0 1 1.385.923l1.25 3A1.5 1.5 0 0 1 18.25 9H8.5a1.5 1.5 0 0 1-1.385-.923l-1.25-3A1.5 1.5 0 0 1 7.25 3m8.25 6v3M5 14a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Zm5.5-11L13 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.plksdhbjo {
  d: path("M10 16.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="f-l6j_4er"/><path class="plksdhbjo"/></g>`,
		"fallback": "uix:camera-solar",
	});
}

export default Component;
