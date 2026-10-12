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
		"content": `<style>.j4g21fbob {
  d: path("M9 15.5h6v2.75a3 3 0 0 1-6 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zows47bgw {
  d: path("M6.75 2.75h11.5l-.25.97l-2.75 10.81l-.25.97H9l-.25-.97L6 3.72l-.25-.97zM12 15.5V2.75m-5.15 4.5h10.3");
}
</style><g class="x2cwu0gfd"><path class="zows47bgw"/><path class="j4g21fbob"/></g>`,
		"fallback": "iconoven:badminton-shuttle-sharp",
	});
}

export default Component;
