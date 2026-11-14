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
		"content": `<style>.ct9o93uth {
  d: path("m3 9l4-4h12.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u73nqd2vw {
  d: path("M6.75 9.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M12.5 9H18m-5.5 3.5h4m-10 3.25H18");
}
</style><g class="hntgybcog"><path class="ct9o93uth"/><path class="u73nqd2vw"/></g>`,
		"fallback": "uix:bike-id-tag",
	});
}

export default Component;
