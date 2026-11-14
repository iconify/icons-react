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

.p6w-wpz6k {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M12 5.5h.01M18.5 12h.01M12 18.5h.01M5.5 12h.01");
}

.qq3otgbjy {
  d: path("M12 9v3l2.25 1.5");
}
</style><g class="hntgybcog"><path class="p6w-wpz6k"/><path class="qq3otgbjy"/></g>`,
		"fallback": "uix:clock-wall",
	});
}

export default Component;
