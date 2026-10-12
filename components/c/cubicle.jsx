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

.kmsa3vmcx {
  d: path("M2.75 21.25v-15a1.5 1.5 0 0 1 1.5-1.5h15.5a1.5 1.5 0 0 1 1.5 1.5v15M2.75 16h18.5");
}

.m6nkjhiin {
  d: path("M12 13v3");
}

.s639urbmm {
  width: 7px;
  height: 5px;
  x: 8.5px;
  y: 8px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="kmsa3vmcx"/><rect class="s639urbmm"/><path class="m6nkjhiin"/></g>`,
		"fallback": "iconoven:cubicle",
	});
}

export default Component;
