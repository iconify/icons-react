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
		"content": `<style>.es-bpricz {
  d: path("M12.25 19.25C10 17 7.5 16.5 4.5 17.5c2 2.5 5 3 7.75 1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vl-joljng {
  d: path("M11.5 15C8 12 6 8 6.5 3.5C9 6.5 13 6.5 17 4l3-1.5c-1.5 5-4 9-8.5 12.5m0 0c0 3 1 5 2.5 6.5m-2.5-9.25l.25-2.75");
}
</style><g class="hntgybcog"><path class="vl-joljng"/><path class="es-bpricz"/></g>`,
		"fallback": "uix:calla-lily",
	});
}

export default Component;
