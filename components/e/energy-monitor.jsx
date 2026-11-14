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

.ns0c7bbfw {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 12.125v-4.25A4.375 4.375 0 0 1 6.875 3.5M12 16.5v4m-4 0h8");
}

.pcabpr1_s {
  d: path("M11.712 7.11L9.937 9.329A.721.721 0 0 0 10.5 10.5a1.17 1.17 0 0 1 1.136 1.455l-.136.545a.45.45 0 0 0 .788.39l1.775-2.219A.721.721 0 0 0 13.5 9.5a1.17 1.17 0 0 1-1.136-1.455L12.5 7.5a.45.45 0 0 0-.788-.39");
}
</style><g class="hntgybcog"><path class="ns0c7bbfw"/><path class="pcabpr1_s"/></g>`,
		"fallback": "uix:energy-monitor",
	});
}

export default Component;
