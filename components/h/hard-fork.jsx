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
		"content": `<style>.bby_ajj6p {
  d: path("M12 21v-9L5 5m7 7l7-7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zyas4xbks {
  d: path("M5 9V5h4m6 0h4v4");
}
</style><g class="hntgybcog"><path class="bby_ajj6p"/><path class="zyas4xbks"/></g>`,
		"fallback": "uix:hard-fork",
	});
}

export default Component;
