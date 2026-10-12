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
		"content": `<style>.acsttngms {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 11.75h17.5v3a5.5 5.5 0 0 1-5.5 5.5h-6.5a5.5 5.5 0 0 1-5.5-5.5Zm0 2.5h17.5");
}

.ms78u9z4z {
  cx: 8.25px;
  cy: 5.25px;
  r: 1.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.np3bxhlxr {
  cx: 15.75px;
  cy: 5.25px;
  r: 1.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ojslz54ld {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 6.75v4m6.5-4v4");
}

.r8i1ocbvm {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17.25h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="acsttngms"/><path class="r8i1ocbvm"/><circle class="ms78u9z4z"/><circle class="np3bxhlxr"/><path class="ojslz54ld"/></g>`,
		"fallback": "iconoven:earbuds-case",
	});
}

export default Component;
