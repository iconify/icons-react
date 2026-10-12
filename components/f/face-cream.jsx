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
		"content": `<style>.ehccj3bat {
  d: path("M8 16.75h8");
}

.gnglcnlso {
  d: path("M5.75 9.5A6.25 4.25 0 0 1 12 5.25c.5-1.4 1.4-2.5 3-2.5c-.4 1.3-.2 2.4.75 3.3c1.5.8 2.5 2 2.5 3.45Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o8w5-91_s {
  width: 17.5px;
  height: 8.75px;
  x: 3.25px;
  y: 12.5px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><path class="gnglcnlso"/><rect class="o8w5-91_s"/><path class="ehccj3bat"/></g>`,
		"fallback": "iconoven:face-cream",
	});
}

export default Component;
