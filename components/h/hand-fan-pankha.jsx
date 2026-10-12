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

.k3nhh1-fh {
  d: path("M9.5 13.9L12 11l2.5 2.9m-2.5.35v7");
}

.vghh_1b0g {
  d: path("M12 14.25c-4.5 0-7.25-2.25-7.25-5.75S7.5 2.75 12 2.75S19.25 5 19.25 8.5S16.5 14.25 12 14.25");
}
</style><g class="hntgybcog"><path class="vghh_1b0g"/><path class="k3nhh1-fh"/></g>`,
		"fallback": "iconoven:hand-fan-pankha",
	});
}

export default Component;
