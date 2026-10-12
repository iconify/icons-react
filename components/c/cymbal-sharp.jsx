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
		"content": `<style>.cmz-veuxk {
  d: path("M2.75 10.75c0-1.5 4.1-2.5 9.25-2.5s9.25 1 9.25 2.5c0 .8-4.1 1.5-9.25 1.5s-9.25-.7-9.25-1.5Z");
}

.jbnubzvsj {
  d: path("M9.75 8.5c0-1.8 1-3.25 2.25-3.25s2.25 1.45 2.25 3.25ZM12 5.25v-2.5m0 9.5v7.5m0 0l-4 1.5m4-1.5l4 1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cmz-veuxk"/><path class="jbnubzvsj"/></g>`,
		"fallback": "iconoven:cymbal-sharp",
	});
}

export default Component;
