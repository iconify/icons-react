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
		"content": `<style>.o8rz89b_g {
  d: path("M3.5 2.5H8v19H3.5Zm4.5 3h12.5v9H8ZM3.5 10H8");
}

.pned1f0lu {
  d: path("M12.25 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4.736 7.518a8 8 0 0 1-5.472 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o8rz89b_g"/><path class="pned1f0lu"/></g>`,
		"fallback": "uix-sharp:camera-trap",
	});
}

export default Component;
