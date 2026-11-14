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
		"content": `<style>.ecshfzpdm {
  d: path("m13 13l3.25.75l5.5 5.5l-2.5 2.5l-5.5-5.5Z");
}

.kmo5mx64e {
  d: path("M10.7 15.5H2.5v-12h17v9.6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kmo5mx64e"/><path class="ecshfzpdm"/></g>`,
		"fallback": "uix-sharp:graphics-tablet",
	});
}

export default Component;
