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

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.pbrf5747u {
  d: path("M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.uuneasbck {
  d: path("M18.885 12.244C18.149 9.862 16.731 7.775 14.5 6.5h-6c-3.5 2-5 6-5 10c0 2.75 2 4 5 4h3.238M8.5 6.5L7 3h9l-1.5 3.5");
}
</style><g class="hntgybcog"><path class="uuneasbck"/><path class="pbrf5747u"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:commodity-price",
	});
}

export default Component;
