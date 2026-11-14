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

.hqdilwbrj {
  d: path("M9 3C7 4.5 3.5 4.5 3 7.5l2.5 14h13l2.5-14c-.5-3-4-3-6-4.5");
}

.yldxy1bik {
  d: path("M12 2.5V7l-1.75 1.5M12 7l1.75 1.5m-3.5 0V17H8c-1 0-1.25-1-1-2l.75-4.5c.25-1.25 1.25-2 2.5-2m3.5 0V17H16c1 0 1.25-1 1-2l-.75-4.5c-.25-1.25-1.25-2-2.5-2");
}
</style><g class="hntgybcog"><path class="hqdilwbrj"/><path class="yldxy1bik"/></g>`,
		"fallback": "uix:anatomy-torso",
	});
}

export default Component;
