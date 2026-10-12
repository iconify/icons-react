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

.o5vk1es1c {
  cx: 12px;
  cy: 7.5px;
  r: 1.25px;
}

.sifubtbdm {
  d: path("M8 21.25V16q0-2.5 2-3.75q2 1.25 2 3.75q0-2.5 2-3.75q2 1.25 2 3.75v5.25M12 16v5.25");
}

.zuw80qb6p {
  d: path("M5.5 21.25V11.5C5.5 7 8.5 4 12 2.75C15.5 4 18.5 7 18.5 11.5v9.75Z");
}
</style><g class="hntgybcog"><path class="zuw80qb6p"/><circle class="o5vk1es1c"/><path class="sifubtbdm"/></g>`,
		"fallback": "iconoven:gothic-window",
	});
}

export default Component;
