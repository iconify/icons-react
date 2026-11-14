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
		"content": `<style>.broq0k3fv {
  d: path("M5.5 20.5v-3.75a2.75 2.75 0 0 1 5.5 0v3.75m3-2.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.ry9tf9vwi {
  d: path("M11.744 20.5H3.5v-10L12 3.25l8.5 7.25v1.856");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ry9tf9vwi"/><path class="broq0k3fv"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:childcare-cost",
	});
}

export default Component;
