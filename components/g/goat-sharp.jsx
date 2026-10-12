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
		"content": `<style>.f9drbky6m {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 8.5h7c0 3.75-.75 7-1.75 9.25L12 21.25l-1.75-3.5c-1-2.25-1.75-5.5-1.75-9.25Z");
}

.jond5s9ol {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.5 11.75h.01m2.99 0h.01");
}

.rqtm67seq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 9.75H4l.9 1.2l1.255 1.55H8.75Zm7 0H20l-.9 1.2l-1.255 1.55H15.25ZM10 8.5c-.5-3-2.5-5-5.75-5.25M14 8.5c.5-3 2.5-5 5.75-5.25");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="f9drbky6m"/><path class="rqtm67seq"/><path class="jond5s9ol"/></g>`,
		"fallback": "iconoven:goat-sharp",
	});
}

export default Component;
