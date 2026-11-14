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

.n2m-not2n {
  d: path("m8.962 6.053l-3.364 4.709A1.415 1.415 0 0 0 6.75 13h.962a1.5 1.5 0 0 1 1.477 1.761L8.75 17.25a.905.905 0 0 0 1.644.659l3.081-4.621A1.472 1.472 0 0 0 12.25 11h-.856a1.5 1.5 0 0 1-1.46-1.844L10.5 6.75a.86.86 0 0 0-1.538-.697m7.4 1.447a7 7 0 0 1 0 9");
}

.zrwasybdy {
  d: path("M18.469 5.733a9.75 9.75 0 0 1 0 12.534");
}
</style><g class="hntgybcog"><path class="n2m-not2n"/><path class="zrwasybdy"/></g>`,
		"fallback": "uix:flash-trigger",
	});
}

export default Component;
