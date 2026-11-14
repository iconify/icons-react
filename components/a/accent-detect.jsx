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
		"content": `<style>.fa3mbzloi {
  d: path("M9.5 12.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm5-2.5v5M12.5 7l2-1.75");
}

.fzpi4qbzg {
  d: path("M2.5 5A2.5 2.5 0 0 1 5 2.5h14A2.5 2.5 0 0 1 21.5 5v10.5A2.5 2.5 0 0 1 19 18h-8l-4.5 3.5V18H5a2.5 2.5 0 0 1-2.5-2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fzpi4qbzg"/><path class="fa3mbzloi"/></g>`,
		"fallback": "uix-sharp:accent-detect",
	});
}

export default Component;
