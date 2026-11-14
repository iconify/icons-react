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
		"content": `<style>.b7-8jcbqe {
  d: path("M12 2.5c4.5 0 7 6.5 7 11.5c0 4.5-3 7.5-7 7.5s-7-3-7-7.5C5 9 7.5 2.5 12 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ma2lg85kg {
  d: path("m5.25 12.5l2.75-2l2.5 3l3-3l2.5 3l2.75-2");
}
</style><g class="hntgybcog"><path class="b7-8jcbqe"/><path class="ma2lg85kg"/></g>`,
		"fallback": "uix:dragon-egg",
	});
}

export default Component;
