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
		"content": `<style>.flf8sbc2n {
  d: path("M10 5.75h4l-.318 1.719L12 8.75l-1.682-1.281z");
}

.l82dqub3m {
  d: path("M7.25 2.75v2.5c0 2.6 1.6 4.5 4.75 6.75c-3.15 2.25-4.75 4.15-4.75 6.75v2.5h9.5v-2.5c0-2.6-1.6-4.5-4.75-6.75c3.15-2.25 4.75-4.15 4.75-6.75v-2.5Zm-1.5 0h12.5m-12.5 18.5h12.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="l82dqub3m"/><path class="flf8sbc2n"/></g>`,
		"fallback": "iconoven:hourglass-start-sharp",
	});
}

export default Component;
