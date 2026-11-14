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
		"content": `<style>.hn8qjl2lr {
  d: path("M12 12.25V14l1.25 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rgtjrzndh {
  d: path("M9 14a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.six_gvzxd {
  d: path("M8 8h8a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 16 20H8a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 8 8m1-4.5V8m6-4.5V8");
}
</style><g class="hntgybcog"><path class="six_gvzxd"/><path class="rgtjrzndh"/><path class="hn8qjl2lr"/></g>`,
		"fallback": "uix:back-soon-sign",
	});
}

export default Component;
