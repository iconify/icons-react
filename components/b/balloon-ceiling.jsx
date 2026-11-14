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
		"content": `<style>.cxegibcyi {
  d: path("M5.5 9c-1 3 1 6 0 9M12 9c-1 4 1 8 0 12m6.5-12c-1 2.5 1 5 0 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.twa7e9nuw {
  d: path("M2.5 3h19M3.25 6a2.25 3 0 1 0 4.5 0a2.25 3 0 1 0-4.5 0m6.5 0a2.25 3 0 1 0 4.5 0a2.25 3 0 1 0-4.5 0m6.5 0a2.25 3 0 1 0 4.5 0a2.25 3 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="twa7e9nuw"/><path class="cxegibcyi"/></g>`,
		"fallback": "uix:balloon-ceiling",
	});
}

export default Component;
