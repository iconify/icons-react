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

.ld656tbbe {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2.25px;
}

.rd192gboy {
  d: path("M12 17c-2.75-1.75-5-3.75-5-6.25a2.5 2.5 0 0 1 5-.75a2.5 2.5 0 0 1 5 .75c0 2.5-2.25 4.5-5 6.25");
}
</style><g class="hntgybcog"><rect class="ld656tbbe"/><path class="rd192gboy"/></g>`,
		"fallback": "iconoven:card-heart",
	});
}

export default Component;
