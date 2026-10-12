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
		"content": `<style>.ilihv0v9u {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 7h.01");
}

.l3-rllbtr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 15.25L15 10.5m-3.5 0H15V14");
}

.tjg5tgbel {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.25v6.4l.001.621l.439.439l9.1 9.1l1.06 1.059l1.06-1.059l6.4-6.4l1.059-1.06l-1.059-1.06l-9.1-9.1l-.439-.439l-.621-.001h-7.9z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="tjg5tgbel"/><path class="ilihv0v9u"/><path class="l3-rllbtr"/></g>`,
		"fallback": "iconoven:incoterm-tag-sharp",
	});
}

export default Component;
