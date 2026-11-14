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
		"content": `<style>.k403xib4i {
  d: path("M2.5 3.5h19v16h-19Z");
}

.rx46yacdq {
  d: path("M9.25 9.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM7 19.5c0-3 2.25-4.5 5-4.5s5 1.5 5 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k403xib4i"/><path class="rx46yacdq"/></g>`,
		"fallback": "uix-sharp:citizen",
	});
}

export default Component;
