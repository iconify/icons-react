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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xo8z7bcmf {
  d: path("M7 13a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4 0l7.5-7.5m0-3v3h3");
}

.yw-i7lbri {
  d: path("M2.5 13a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0Z");
}
</style><g class="ulnmmdpxh"><path class="yw-i7lbri"/><path class="xo8z7bcmf"/></g>`,
		"fallback": "uix-sharp:campaign-goal",
	});
}

export default Component;
