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
		"content": `<style>.hmdkvlfol {
  d: path("M5.125 2.5h13.75A2.625 2.625 0 0 1 21.5 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 18.875V5.125A2.625 2.625 0 0 1 5.125 2.5m3.625 0v19m6.5-19v19M2.5 8.75h19m-19 6.5h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nfjcsukks {
  d: path("M4.25 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6.25-6.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6.25 12.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="hmdkvlfol"/><path class="nfjcsukks"/></g>`,
		"fallback": "uix:blood-count",
	});
}

export default Component;
