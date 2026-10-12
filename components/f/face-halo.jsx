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
		"content": `<style>.hatnvsjbz {
  d: path("M8.5 13c.6-.6 1.65-.6 2.25 0m2.5 0c.6-.6 1.65-.6 2.25 0m-6 3.5c1.4 1 3.6 1 5 0M12 2.75c3 0 5.5.6 5.5 1.38S15 5.5 12 5.5s-5.5-.6-5.5-1.37S9 2.75 12 2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ht_zk-bpr {
  cx: 12px;
  cy: 14.75px;
  r: 6.5px;
}
</style><g class="hntgybcog"><circle class="ht_zk-bpr"/><path class="hatnvsjbz"/></g>`,
		"fallback": "iconoven:face-halo",
	});
}

export default Component;
