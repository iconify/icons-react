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
		"content": `<style>.u8nu1rpws {
  fill: currentColor;
  d: path("M2.5 8.5c4-4.5 7-.5 10.5-3c3-2 5.5-2.5 8.5-1.5v5.5c-3-.5-5.5 2-8.5 4c-3.5 2.5-6.5-1-10.5 2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_ui7pbkk {
  d: path("M2.5 21h19");
}
</style><g class="ulnmmdpxh"><path class="u8nu1rpws"/><path class="v_ui7pbkk"/></g>`,
		"fallback": "uix-sharp:chart-range-area",
	});
}

export default Component;
