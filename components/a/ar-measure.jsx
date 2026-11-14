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
		"content": `<style>.c36jdvbft {
  d: path("m11.25 2.5l7 3.5v8l-7 3.5l-7-3.5V6Z");
}

.g00izwb9y {
  d: path("m4.25 6l7 3.5l7-3.5m-7 3.5v8m0 0L13 21m5.25-7L20 17.5M12.5 20l7-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="c36jdvbft"/><path class="g00izwb9y"/></g>`,
		"fallback": "uix:ar-measure",
	});
}

export default Component;
