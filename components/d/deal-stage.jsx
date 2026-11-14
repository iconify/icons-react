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
		"content": `<style>.g7n7brbxo {
  d: path("M17 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM7 12h2.5m5 0H17");
}

.o1o1z0zae {
  fill: currentColor;
  d: path("M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_pw9eb1d {
  d: path("M2 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><g class="ulnmmdpxh"><path class="w_pw9eb1d"/><path class="o1o1z0zae"/><path class="g7n7brbxo"/></g>`,
		"fallback": "uix-sharp:deal-stage",
	});
}

export default Component;
