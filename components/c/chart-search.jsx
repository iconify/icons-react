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
		"content": `<style>.eanni_blz {
  d: path("M3.5 3v17.5h9.6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k9-cvgb2t {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-4.25 12.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m4.5 2l2.25 2.25");
}
</style><g class="hntgybcog"><path class="eanni_blz"/><path class="k9-cvgb2t"/></g>`,
		"fallback": "uix:chart-search",
	});
}

export default Component;
