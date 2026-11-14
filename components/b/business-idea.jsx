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
		"content": `<style>.gyss56t3p {
  d: path("M12.5 9za1.5 1.5 0 0 1 1.5 1.5a.621.621 0 0 1-1.061.439l-.878-.878A.621.621 0 0 1 12.5 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tkao8rj2l {
  d: path("M9 17.5c0-2-3.5-3.5-3.5-7.5a6.5 6.5 0 0 1 13 0c0 4-3.5 5.5-3.5 7.5Zm.5 3h5M10 13l4-4");
}
</style><g class="hntgybcog"><path class="tkao8rj2l"/><path class="gyss56t3p"/></g>`,
		"fallback": "uix:business-idea",
	});
}

export default Component;
