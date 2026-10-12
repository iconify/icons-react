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

.qi8gbmmge {
  d: path("M2.75 20.75V8q0-.5.5-.5H4.5q.5 0 .5.5v2q0 .5.5.5h1.25q.5 0 .5.5v2q0 .5.5.5H9q.5 0 .5.5v2q0 .5.5.5h4q.5 0 .5-.5v-2q0-.5.5-.5h1.25q.5 0 .5-.5v-2q0-.5.5-.5h1.25q.5 0 .5-.5V8q0-.5.5-.5h1.25q.5 0 .5.5v12.75q0 .5-.5.5H3.25q-.5 0-.5-.5");
}

.rff-g8bjr {
  d: path("M5.5 21.25V19.5a1 1 0 0 1 2 0v1.75m3.5 0V19.5a1 1 0 0 1 2 0v1.75m3.5 0V19.5a1 1 0 0 1 2 0v1.75");
}
</style><g class="hntgybcog"><path class="qi8gbmmge"/><path class="rff-g8bjr"/></g>`,
		"fallback": "iconoven:arena",
	});
}

export default Component;
