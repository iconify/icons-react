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
		"content": `<style>.csyuhrrop {
  d: path("M5 14V3h14v11");
}

.e10hmz-ui {
  fill: currentColor;
  d: path("M2 11v10h20V11L12 21Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k_2z93bzc {
  fill: currentColor;
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nreq_9ofo {
  d: path("M2 11v10h20V11L12 21Z");
}

.u0f6w1z_e {
  d: path("M12 6v3");
}
</style><g class="hntgybcog"><path class="e10hmz-ui"/><path class="k_2z93bzc"/><path class="nreq_9ofo"/><path class="csyuhrrop"/><path class="u0f6w1z_e"/><path class="n3p0zmbop"/></g>`,
		"fallback": "iconmind:budget-exceeded-duotone-thin",
	});
}

export default Component;
