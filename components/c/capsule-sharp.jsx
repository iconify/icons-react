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
		"content": `<style>.nebgxwxgh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 16h6.5v2a3.25 3.25 0 0 1-6.5 0Zm2.44-9.12l1-1.74a3.25 3.25 0 0 1 5.62 3.25l-1 1.74Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.yglz_ns6f {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 10.25h.01m2.99 1h.01M11 13.5h.01");
}
</style><g class="ux2u0rbkq"><path class="nebgxwxgh"/><path class="yglz_ns6f"/></g>`,
		"fallback": "iconoven:capsule-sharp",
	});
}

export default Component;
