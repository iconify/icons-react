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

.kx063ib2e {
  d: path("M3.697 17.303a3 3 0 1 0 6 0a3 3 0 1 0-6 0M14.303 6.697a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.tlmwnci7o {
  d: path("m8.818 13.061l4.243-4.243a1.5 1.5 0 0 1 2.121 0a1.5 1.5 0 0 1 0 2.121l-4.243 4.243a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.121");
}
</style><g class="hntgybcog"><path class="tlmwnci7o"/><path class="kx063ib2e"/></g>`,
		"fallback": "uix:dog-chew-stick",
	});
}

export default Component;
