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
		"content": `<style>.arzl-3bao {
  d: path("m3.5 9l4-4l4 4");
}

.ksbtii-5g {
  d: path("M20.5 19h-8a5 5 0 0 1-5-5V5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ksbtii-5g"/><path class="arzl-3bao"/></g>`,
		"fallback": "uix-sharp:arrow-turn-up-left",
	});
}

export default Component;
