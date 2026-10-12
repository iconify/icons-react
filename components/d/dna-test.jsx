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
		"content": `<style>.b-h2u6bwx {
  d: path("M10 7.5c0 2.75 4 2.75 4 5.5s-4 2.75-4 5.5m4-11c0 2.75-4 2.75-4 5.5s4 2.75 4 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lnnprcbev {
  d: path("M6.75 4.75h10.5m-9.75 0h9v12a4.5 4.5 0 0 1-9 0Z");
}
</style><g class="hntgybcog"><path class="lnnprcbev"/><path class="b-h2u6bwx"/></g>`,
		"fallback": "iconoven:dna-test",
	});
}

export default Component;
