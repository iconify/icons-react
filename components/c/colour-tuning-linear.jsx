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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jzp6r4b6x {
  d: path("M14.5 12H22M2 12H9.5");
}

.uk8ks_p6o {
  d: path("M20.0002 15.6842C20.0002 19 17.7345 22 16.0002 22C13.7315 22 12.0723 18.8421 12.0723 12C12.0723 5.15791 10.4128 1.99985 8.14404 1.99985C6.40978 1.99985 4.14404 4.99985 4.14404 8.31564");
}
</style><g class="ipq1z-bjh"><path class="jzp6r4b6x"/><path class="uk8ks_p6o"/></g>`,
		"fallback": "solar:colour-tuning-linear",
	});
}

export default Component;
