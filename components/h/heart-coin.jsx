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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.pbrf5747u {
  d: path("M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.sjg09bcpr {
  d: path("M11.576 20.076L3.75 12.25C1.5 10 2.25 4 7.5 4c2.25 0 3.75 1.5 4.5 2.75C12.75 5.5 14.25 4 16.5 4c5.25 0 6 6 3.75 8.25l-.035.035");
}
</style><g class="hntgybcog"><path class="sjg09bcpr"/><path class="pbrf5747u"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:heart-coin",
	});
}

export default Component;
