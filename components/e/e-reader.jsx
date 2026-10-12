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
		"content": `<style>.b02k49bqi {
  d: path("M8 5.25h8a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8.5a1 1 0 0 1 1-1m1.25 3h5.5m-5.5 2.25h5.5m-5.5 2.25h3.5m-2.25 5.5h3");
}

.dnp2npbye {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="dnp2npbye"/><path class="b02k49bqi"/></g>`,
		"fallback": "iconoven:e-reader",
	});
}

export default Component;
