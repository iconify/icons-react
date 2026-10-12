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
		"content": `<style>.nciaxcb6w {
  d: path("M3.25 3.25h17.5v17.5H3.25z");
}

.skh6m6vww {
  d: path("M12 7.5v8.75m3.75-3.75L12 16.25L8.25 12.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nciaxcb6w"/><path class="skh6m6vww"/></g>`,
		"fallback": "iconoven:arrow-down-square-sharp",
	});
}

export default Component;
