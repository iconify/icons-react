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
		"content": `<style>.dc0e5le1x {
  d: path("M12 7.75a4.25 4.25 0 0 0 0 8.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zjoej9b6v {
  d: path("M2.5 12c3-9.5 16-9.5 19 0c-3 9.5-16 9.5-19 0");
}
</style><g class="hntgybcog"><path class="zjoej9b6v"/><path class="dc0e5le1x"/></g>`,
		"fallback": "uix:colour-blindness-sim",
	});
}

export default Component;
