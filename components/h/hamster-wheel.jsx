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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_-mc7bkx {
  d: path("M4.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.y155_2hbt {
  d: path("M8.5 21.5L12 10l3.5 11.5m-9.5 0h12M12 10h.01");
}
</style><g class="ulnmmdpxh"><path class="v_-mc7bkx"/><path class="y155_2hbt"/></g>`,
		"fallback": "uix-sharp:hamster-wheel",
	});
}

export default Component;
