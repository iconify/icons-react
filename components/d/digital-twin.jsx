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
		"content": `<style>.rbvv3bbxj {
  d: path("m10 8l5.25 3v6L10 20l-5.25-3v-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zjbgyrbix {
  d: path("M4.75 11L10 14l5.25-3M10 14v6M8.75 6.5l1.75-1m1.75-1l1.75-1l1.75 1m1.75 1l1.75 1v1.75m0 2.5v1.75l-1.75 1");
}
</style><g class="ulnmmdpxh"><path class="rbvv3bbxj"/><path class="zjbgyrbix"/></g>`,
		"fallback": "uix-sharp:digital-twin",
	});
}

export default Component;
