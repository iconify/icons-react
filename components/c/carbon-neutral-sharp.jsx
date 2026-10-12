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
		"content": `<style>.ga5lm6b6f {
  d: path("M12 8.25c1.5 0 2.25 1.75 2.25 3.75s-.75 3.75-2.25 3.75S9.75 14 9.75 12S10.5 8.25 12 8.25Z");
}

.rge8jw-zr {
  d: path("M4.08 9.5A8.25 8.25 0 0 1 19 7.6m.25-3.85L19 7.6l-3.75.25m4.67 6.65A8.25 8.25 0 0 1 5 16.4m-.25 3.85L5 16.4l3.75-.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rge8jw-zr"/><path class="ga5lm6b6f"/></g>`,
		"fallback": "iconoven:carbon-neutral-sharp",
	});
}

export default Component;
