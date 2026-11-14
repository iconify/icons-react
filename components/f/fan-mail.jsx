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
		"content": `<style>.boi3p0ncm {
  d: path("M2.5 4.5h19v15h-19Zm0 2l6.75 7m12.25-7l-6.75 7");
}

.fiq_6-b4g {
  d: path("m12 16.5l-2.75-3A2.25 2.25 0 0 1 12 10.25a2.25 2.25 0 0 1 2.75 3.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="boi3p0ncm"/><path class="fiq_6-b4g"/></g>`,
		"fallback": "uix-sharp:fan-mail",
	});
}

export default Component;
