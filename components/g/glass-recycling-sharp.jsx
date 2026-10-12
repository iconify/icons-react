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
		"content": `<style>.wdd_k9f2l {
  d: path("M16.5 4.21a9 9 0 1 1-9 0m-.65 2.42l.65-2.42l-2.42-.65");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xx870zjbv {
  d: path("M11 6.5h2V9l2.25.9V18h-6.5V9.9L11 9Z");
}
</style><g class="x2cwu0gfd"><path class="wdd_k9f2l"/><path class="xx870zjbv"/></g>`,
		"fallback": "iconoven:glass-recycling-sharp",
	});
}

export default Component;
