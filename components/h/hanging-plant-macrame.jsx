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
		"content": `<style>.a21oqsbiw {
  d: path("M12 13.5v-4m0 4c0-1.75-.75-2.5-2-3m2 3c0-1.75.75-2.5 2-3");
}

.f-_m7ib4a {
  d: path("M3.5 13.5L12 4l8.5 9.5m-17 0h17c0 5-4 8-8.5 8s-8.5-3-8.5-8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mti9wcbrl {
  d: path("M11 3a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><g class="hntgybcog"><path class="mti9wcbrl"/><path class="f-_m7ib4a"/><path class="a21oqsbiw"/></g>`,
		"fallback": "uix:hanging-plant-macrame",
	});
}

export default Component;
