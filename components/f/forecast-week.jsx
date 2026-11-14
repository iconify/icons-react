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
		"content": `<style>.t9l-qsbln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 12h9a3 3 0 0 0 0-6a5 5 0 0 0-9 1a2.5 2.5 0 0 0 0 5m-2.625 2.75h14.25a2.625 2.625 0 0 1 2.625 2.625v1A2.625 2.625 0 0 1 19.125 21H4.875a2.625 2.625 0 0 1-2.625-2.625v-1a2.625 2.625 0 0 1 2.625-2.625m.125 0V21m2.75-6.25V21m2.75-6.25V21m3-6.25V21m2.75-6.25V21M19 14.75V21");
}
</style><path class="t9l-qsbln"/>`,
		"fallback": "uix:forecast-week",
	});
}

export default Component;
