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
		"content": `<style>.df37j-jsy {
  d: path("M5.5 16.25s-2.75-2-2.75-4.75a1.6 1.6 0 0 1 2.75-1.1a1.6 1.6 0 0 1 2.75 1.1c0 2.75-2.75 4.75-2.75 4.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nbmta4bhn {
  width: 4px;
  height: 2.5px;
  x: 13.25px;
  y: 10.75px;
  rx: 0.75px;
}

.q3-s69i3m {
  width: 10.5px;
  height: 7.5px;
  x: 10.75px;
  y: 8.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><path class="df37j-jsy"/><rect class="q3-s69i3m"/><rect class="nbmta4bhn"/></g>`,
		"fallback": "iconoven:health-bar",
	});
}

export default Component;
