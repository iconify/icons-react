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
		"content": `<style>.fjd_9pnqk {
  d: path("M12.5 15.5L10 4.5H6A3.5 3.5 0 0 0 2.5 8v7.5H18M15.5 3l3 15m-5-15h4");
}

.tnmr5ubcz {
  d: path("M4 18a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm12 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM8.25 7.5L6 10.25h2.75l-2 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fjd_9pnqk"/><path class="tnmr5ubcz"/></g>`,
		"fallback": "uix-sharp:e-moped",
	});
}

export default Component;
