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

.poa4r25xv {
  d: path("M8 5C8 6.6569 6.6569 8 5 8C3.3431 8 2 6.6569 2 5C2 3.3431 3.3431 2 5 2C6.6569 2 8 3.3431 8 5Z");
}

.ru1ymkblj {
  d: path("M5 8V22");
}

.wddphhbzi {
  d: path("M22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z");
}

.x5-jimv8v {
  d: path("M5 8C5 14.5 9.5 19 16 19");
}
</style><g class="hntgybcog"><path class="poa4r25xv"/><path class="wddphhbzi"/><path class="ru1ymkblj"/><path class="x5-jimv8v"/></g>`,
		"fallback": "solar:git-merge-linear",
	});
}

export default Component;
