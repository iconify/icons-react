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

.hwwfw6bzu {
  d: path("m5 15l-1 6.5h10L13 15m-7-5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.l8p5bbb1t {
  d: path("M10 9h10.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1a1 1 0 0 1 1-1m8.5 2v10.5");
}

.lcg02sl1z {
  d: path("M2.5 10a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}
</style><g class="hntgybcog"><path class="lcg02sl1z"/><path class="hwwfw6bzu"/><path class="l8p5bbb1t"/></g>`,
		"fallback": "uix:ct-scanner",
	});
}

export default Component;
