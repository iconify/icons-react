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
		"content": `<style>.nj6q_jb9z {
  d: path("M14.5 9L12 6.5L9.5 9m5 6L12 17.5L9.5 15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vqnoe7_hn {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM12 6.5v11");
}
</style><g class="ulnmmdpxh"><path class="vqnoe7_hn"/><path class="nj6q_jb9z"/></g>`,
		"fallback": "uix-sharp:arrow-up-down-circle",
	});
}

export default Component;
