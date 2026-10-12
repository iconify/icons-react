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
		"content": `<style>.fllacmhhd {
  d: path("M7.5 12.25c2.5 2.25 6.5 2.25 9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lrr8x8bla {
  d: path("M6.75 2.75c.5 4 2.25 7 2.25 10c0 1.5-.75 2.5-.75 4s.75 2.5.75 4.5m8.25-18.5c-.5 4-2.25 7-2.25 10c0 1.5.75 2.5.75 4s-.75 2.5-.75 4.5");
}

.qwr66fb0j {
  d: path("M12 14c.75 1 1.5 1.75 1.5 2.5a1.5 1.5 0 0 1-3 0c0-.75.75-1.5 1.5-2.5");
}
</style><g class="hntgybcog"><path class="lrr8x8bla"/><path class="fllacmhhd"/><path class="qwr66fb0j"/></g>`,
		"fallback": "iconoven:anklet",
	});
}

export default Component;
