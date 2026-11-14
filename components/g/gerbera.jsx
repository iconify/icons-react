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
		"content": `<style>.ee7_vjjhi {
  d: path("m12 2l1.25 3.25l2.75-2l-.75 3.5h3.5L16 9l2.75 2.25h-3.5l.75 3.5l-2.75-2L12 16l-1.25-3.25l-2.75 2l.75-3.5h-3.5L8 9L5.25 6.75h3.5L8 3.25l2.75 2Zm0 14v5.5");
}

.jblk5ftrc {
  d: path("M10.75 9a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ee7_vjjhi"/><path class="jblk5ftrc"/></g>`,
		"fallback": "uix-sharp:gerbera",
	});
}

export default Component;
