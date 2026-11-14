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
		"content": `<style>.ewmnwvkjz {
  d: path("M5.25 8a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m5.5 2.5L15.5 14v6.75c0 .75-.75 1-1.25.5l-1.75-6l-3-2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nttuw_2sm {
  d: path("M3.25 8a5.25 5.25 0 0 1 10.5 0");
}
</style><g class="hntgybcog"><path class="ewmnwvkjz"/><path class="nttuw_2sm"/></g>`,
		"fallback": "uix:hip-replacement",
	});
}

export default Component;
