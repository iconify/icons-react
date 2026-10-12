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
		"content": `<style>.ix0zgii_h {
  d: path("M10 11a2.5 2.5 0 1 1 3.5 0v1.25H10Z");
}

.p8bmj_5jp {
  d: path("M7 15.5a4 4 0 0 1-.6-7.95a5.5 5.5 0 0 1 10.2-.75a4.35 4.35 0 0 1 .15 8.7Z");
}

.tbv1ubc9c {
  cx: 6.5px;
  cy: 19.25px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="p8bmj_5jp"/><path class="ix0zgii_h"/><circle class="tbv1ubc9c"/></g>`,
		"fallback": "iconoven:brainstorm-sharp",
	});
}

export default Component;
