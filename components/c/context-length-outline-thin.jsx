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
		"content": `<style>.ab69i60qd {
  d: path("M5.5 4H3v16h2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qebvfnl4i {
  d: path("M18.5 4H21v16h-2.5");
}

.uxyzhxvwz {
  d: path("M7 12h10");
}
</style><g class="hntgybcog"><path class="ab69i60qd"/><path class="qebvfnl4i"/><path class="uxyzhxvwz"/></g>`,
		"fallback": "iconmind:context-length-outline-thin",
	});
}

export default Component;
