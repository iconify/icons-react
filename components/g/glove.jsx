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
		"content": `<style>.bn5bjnbaj {
  width: 11px;
  height: 5px;
  x: 6px;
  y: 16.25px;
  rx: 1px;
}

.e8wy1nbdx {
  d: path("M6.5 16.25V8A1.25 1.25 0 0 1 9 8V5.25a1.25 1.25 0 0 1 2.5 0V4.5a1.25 1.25 0 0 1 2.5 0v1a1.25 1.25 0 0 1 2.5 0V12l1.9-1.9a1.35 1.35 0 0 1 1.9 1.9l-3.8 3v1.25ZM9 9.5V13m2.5-6v6M14 7.25V13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e8wy1nbdx"/><rect class="bn5bjnbaj"/></g>`,
		"fallback": "iconoven:glove",
	});
}

export default Component;
