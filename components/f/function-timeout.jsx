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

.sbezkcbzn {
  d: path("M19.5 14.75v1l-3 4.5v1");
}

.sdu05fs9z {
  d: path("m6.5 3l-4 4.5l4 4.5m7-9.5l-3 10m7-9.5l4 4.5l-4 4.5m-2 2.75h5m-5 6.5h5m-4-6.5v1l3 4.5v1");
}
</style><g class="hntgybcog"><path class="sdu05fs9z"/><path class="sbezkcbzn"/></g>`,
		"fallback": "uix:function-timeout",
	});
}

export default Component;
