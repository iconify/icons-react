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
		"content": `<style>.fnh1rebyu {
  d: path("M17 5h4v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wkzv3lbio {
  d: path("m3 17l5-6l4 3l9-9M3 20.5h18");
}
</style><g class="hntgybcog"><path class="wkzv3lbio"/><path class="fnh1rebyu"/></g>`,
		"fallback": "uix:demand-forecast",
	});
}

export default Component;
