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

.hwethcbfm {
  d: path("M11.758 20.505L10.25 19.5L8 21l-2-1.5L4 21V2.5h13v9.7M7.5 7h6m-6 4h6m-6 4h3");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.pbrf5747u {
  d: path("M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="hwethcbfm"/><path class="pbrf5747u"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:commission-statement",
	});
}

export default Component;
