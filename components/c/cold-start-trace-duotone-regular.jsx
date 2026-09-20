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
		"content": `<style>.lqcp5xb1v {
  d: path("M4 3h16");
}

.mzkwo-z2x {
  d: path("M7 9.5v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t3vzob-fn {
  d: path("M2 12a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6 6 6 0 0 1 -6 6H8a6 6 0 0 1 -6 -6");
}

.ubm0zdrys {
  fill: currentColor;
  d: path("M2 12a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6 6 6 0 0 1 -6 6H8a6 6 0 0 1 -6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wlia6bb5b {
  d: path("M11 12h7");
}
</style><g class="nrj6p8qat"><path class="ubm0zdrys"/><path class="lqcp5xb1v"/><path class="t3vzob-fn"/><path class="mzkwo-z2x"/><path class="wlia6bb5b"/></g>`,
		"fallback": "iconmind:cold-start-trace-duotone-regular",
	});
}

export default Component;
