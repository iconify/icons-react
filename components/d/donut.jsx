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
		"content": `<style>.awfh02bkg {
  d: path("M12 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6m-5.25.25l1-1m8-1.5L17 7.5m.25 6.5l-.5 1.25m-8.5.5l1 .75");
}

.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="awfh02bkg"/></g>`,
		"fallback": "iconoven:donut",
	});
}

export default Component;
