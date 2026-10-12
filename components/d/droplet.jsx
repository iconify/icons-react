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

.hzo6ycgil {
  d: path("M12 2.75C8.5 7 5.25 10.75 5.25 14.5a6.75 6.75 0 0 0 13.5 0c0-3.75-3.25-7.5-6.75-11.75");
}

.t2j8pi-3f {
  d: path("M8.75 14.75A3.25 3.25 0 0 0 12 18");
}
</style><g class="hntgybcog"><path class="hzo6ycgil"/><path class="t2j8pi-3f"/></g>`,
		"fallback": "iconoven:droplet",
	});
}

export default Component;
