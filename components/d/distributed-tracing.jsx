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
		"content": `<style>.fw095ebce {
  d: path("M5 7v12h8.5M5 12h3.5");
}

.qetwbhp9c {
  d: path("M3 3h10v4H3Zm5.5 7H17v4H8.5Zm5 7H21v4h-7.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qetwbhp9c"/><path class="fw095ebce"/></g>`,
		"fallback": "uix-sharp:distributed-tracing",
	});
}

export default Component;
