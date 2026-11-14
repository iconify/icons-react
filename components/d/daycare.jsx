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
		"content": `<style>.af_bpybmz {
  d: path("m3.837 14.488l7.25-4.43a1.75 1.75 0 0 1 1.826 0l7.25 4.43A1.75 1.75 0 0 1 21 15.981v3.769a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 19.75v-3.769a1.75 1.75 0 0 1 .837-1.493");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xad9vab2f {
  d: path("M10 21.5v-4a2 2 0 0 1 4 0v4M8 9.75a4 4 0 1 1 8 0m-4-6V2M8 5.5L6.5 4M16 5.5L17.5 4");
}
</style><g class="hntgybcog"><path class="af_bpybmz"/><path class="xad9vab2f"/></g>`,
		"fallback": "uix:daycare",
	});
}

export default Component;
