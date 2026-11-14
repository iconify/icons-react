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

.kg6s3hb5i {
  d: path("M14.5 6a2 2 0 0 1 4 0v4.5l-1 1.5l1 1.5V18a2 2 0 0 1-4 0v-4.5l1-1.5l-1-1.5Z");
}

.l86s6bcje {
  fill: currentColor;
  d: path("M5.5 6a2 2 0 0 1 4 0v4.5l-1 1.5l1 1.5V18a2 2 0 0 1-4 0v-4.5l1-1.5l-1-1.5Z");
}
</style><g class="hntgybcog"><path class="l86s6bcje"/><path class="kg6s3hb5i"/></g>`,
		"fallback": "uix:allele-pair",
	});
}

export default Component;
