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
		"content": `<style>.g-wxd1xvy {
  d: path("M12 5v2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.loqr5yt1s {
  d: path("M4 10h8l7 7");
}

.toso_pb8v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 10h8l7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w00q2fbhs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 5v2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="toso_pb8v"/><path class="w00q2fbhs"/><path class="loqr5yt1s"/><path class="g-wxd1xvy"/></g>`,
		"fallback": "iconmind:changepoint-duotone-thin",
	});
}

export default Component;
