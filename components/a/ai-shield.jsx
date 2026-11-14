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
		"content": `<style>.m5lbd05mj {
  d: path("M12 2.5c2 1.5 4 2.5 7.5 3V11c0 5-3 8.5-7.5 10.5c-4.5-2-7.5-5.5-7.5-10.5V5.5C8 5 10 4 12 2.5Z");
}

.qyvzd5bsf {
  d: path("m8 12.25l3 3l5.25-5.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m5lbd05mj"/><path class="qyvzd5bsf"/></g>`,
		"fallback": "uix-sharp:ai-shield",
	});
}

export default Component;
