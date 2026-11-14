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
		"content": `<style>.dfka36boz {
  d: path("m17.25 14.5l-2 2l2 2");
}

.gre2kv8ho {
  d: path("m12.884 17.923l-.634-.423L10 19l-2.5-1.5V5.25H19v7.1m-8.5-3.1H16m-5.5 4h3m1.75 3.25h3.5a2.5 2.5 0 0 1 0 5H16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lknw1x09y {
  d: path("M4.5 17V4.5a2 2 0 0 1 2-2h9");
}
</style><g class="hntgybcog"><path class="lknw1x09y"/><path class="gre2kv8ho"/><path class="dfka36boz"/></g>`,
		"fallback": "uix:billing-history",
	});
}

export default Component;
