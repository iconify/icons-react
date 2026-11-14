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

.id4-i3bwx {
  d: path("M5.5 15.5H12l4-6l2.5 6");
}

.ma1kg5nak {
  d: path("M2 15.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m13 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.t3y19xb5z {
  d: path("m5.5 15.5l5-6H16m-4 6l-2-8m-1.5 0h3m4.5 2L15 7h2.5");
}
</style><g class="hntgybcog"><path class="ma1kg5nak"/><path class="id4-i3bwx"/><path class="t3y19xb5z"/></g>`,
		"fallback": "uix:bicycle",
	});
}

export default Component;
