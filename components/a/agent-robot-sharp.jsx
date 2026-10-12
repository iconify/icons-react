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
		"content": `<style>.a_jw4kbjs {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.85l.24 1.76l1.76.24l-1.76.24L12 6.85l-.24-1.76L10 4.85l1.76-.24zm-8.25 5.9h16.5v12.5H3.75z");
}

.cfgu_co9g {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12.25h10v4.5H7z");
}

.gu8uj_bfl {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 14.5h.01m4.49 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="a_jw4kbjs"/><path class="cfgu_co9g"/><path class="gu8uj_bfl"/></g>`,
		"fallback": "iconoven:agent-robot-sharp",
	});
}

export default Component;
