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

.p2ciopbql {
  d: path("M2.5 7H5l1.5-3l2 6L10 7h11.5");
}

.si7xw1b6h {
  d: path("M2.5 17H12l1.5-2.5l2 5L17 17h4.5");
}

.zbnoncc8l {
  d: path("M2.5 12H8l1.5-3l2 6l1.5-3h8.5");
}
</style><g class="hntgybcog"><path class="p2ciopbql"/><path class="zbnoncc8l"/><path class="si7xw1b6h"/></g>`,
		"fallback": "uix:brainwave-eeg",
	});
}

export default Component;
