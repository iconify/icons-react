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
		"content": `<style>.dq4m2y2we {
  d: path("M4.25 4.25h15.5v11H4.25zm-1.5 15h18.5");
}

.t0cngecrm {
  d: path("m9.75 7.75l-2 2l2 2m4.5-4l2 2l-2 2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dq4m2y2we"/><path class="t0cngecrm"/></g>`,
		"fallback": "iconoven:ai-coder-sharp",
	});
}

export default Component;
