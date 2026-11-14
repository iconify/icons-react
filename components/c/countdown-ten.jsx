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

.ondbm74wj {
  d: path("M4 13.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0m6-11h4m-2 0v3");
}

.voqwinbvu {
  d: path("m7.5 11.5l1.5-1v6m2.75-3a2 3 0 1 0 4 0a2 3 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="ondbm74wj"/><path class="voqwinbvu"/></g>`,
		"fallback": "uix:countdown-ten",
	});
}

export default Component;
