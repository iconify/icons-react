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
		"content": `<style>.c9j5x8--m {
  d: path("m9.75 6l5.5 3.5l-5.5 3.5Z");
}

.r07mz1v9b {
  d: path("M12 21.5s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r07mz1v9b"/><path class="c9j5x8--m"/></g>`,
		"fallback": "uix-sharp:cinema-pin",
	});
}

export default Component;
