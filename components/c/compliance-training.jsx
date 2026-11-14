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

.im8-kzb2t {
  d: path("M12 6.5C10 5 6.5 4.5 2.5 5v14c4-.5 7.5 0 9.5 1.5c2-1.5 5.5-2 9.5-1.5V5c-4-.5-7.5 0-9.5 1.5m0 0v14");
}

.wb7rpab6r {
  d: path("m14.75 12l1.5 1.5L19 10");
}
</style><g class="hntgybcog"><path class="im8-kzb2t"/><path class="wb7rpab6r"/></g>`,
		"fallback": "uix:compliance-training",
	});
}

export default Component;
