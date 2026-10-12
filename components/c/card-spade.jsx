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

.zemirilpd {
  d: path("M12 6.75C10.5 9 7.5 10.5 7.5 13.25a2.5 2.5 0 0 0 4.1 1.9l-.6 2.1h2l-.6-2.1a2.5 2.5 0 0 0 4.1-1.9c0-2.75-3-4.25-4.5-6.5");
}
</style><g class="hntgybcog"><rect class="ld656tbbe"/><path class="zemirilpd"/></g>`,
		"fallback": "iconoven:card-spade",
	});
}

export default Component;
