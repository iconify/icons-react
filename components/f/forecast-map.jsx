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
		"content": `<style>.b-n2ypbax {
  d: path("M10.728 19.796L8.5 19l-6 2.5V5l6-2.5l7 2.5l6-2.5v12.467M8.5 2.5V19m7-14v9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nafvathas {
  d: path("M15.5 21.5a2 2 0 0 1 0-4a2.75 2.75 0 0 1 4.75.5a1.75 1.75 0 0 1-.25 3.5Z");
}
</style><g class="hntgybcog"><path class="b-n2ypbax"/><path class="nafvathas"/></g>`,
		"fallback": "uix:forecast-map",
	});
}

export default Component;
