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
		"content": `<style>.mvxg8s0kw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.25 16.75h.01");
}

.qohs8abdn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17.49 4.74l1.77 1.77l1.24 1.24l-1.24 1.24l-4.52 4.52l-1.24 1.24l-1.24-1.24l-1.77-1.77l-1.24-1.24l1.24-1.24l4.52-4.52l1.24-1.24zM7.03 11.78l3.69 3.69l.53.53l-.42.62l-1.16 1.76l-.42.62l-.71.23l-4.83 1.54L3 21l.23-.71l1.54-4.83q.23-.71.53-1.4l.9-2.12l.3-.69z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="qohs8abdn"/><path class="mvxg8s0kw"/></g>`,
		"fallback": "iconoven:fountain-pen-sharp",
	});
}

export default Component;
