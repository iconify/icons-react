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
		"content": `<style>.flu7zab1b {
  d: path("M2.5 3.5h19l-9.5 17Z");
}

.rv210ybuk {
  d: path("M7.5 6.5h9L12 14.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="flu7zab1b"/><path class="rv210ybuk"/></g>`,
		"fallback": "uix-sharp:give-way-sign",
	});
}

export default Component;
