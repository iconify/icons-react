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
		"content": `<style>.dc1ykfbei {
  d: path("M3 12a6.5 2.5 0 1 0 13 0a6.5 2.5 0 1 0-13 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tvy1nw5_u {
  d: path("M3 12v3.5a6.5 2.5 0 0 0 13 0V12");
}

.zbvg5b1cc {
  d: path("M3 15.5V19a6.5 2.5 0 0 0 13 0v-3.5m-1.25-10a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="dc1ykfbei"/><path class="tvy1nw5_u"/><path class="zbvg5b1cc"/></g>`,
		"fallback": "uix:coins-crypto",
	});
}

export default Component;
