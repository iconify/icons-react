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
		"content": `<style>.nyxw1pb5f {
  d: path("M18 14.5s-2.75 3-2.75 4.5a2.75 2.75 0 0 0 5.5 0c0-1.5-2.75-4.5-2.75-4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vqxtnkbkf {
  d: path("M12.644 20.5H3.5v-10L12 3.25l8.5 7.25v2.656");
}
</style><g class="ulnmmdpxh"><path class="vqxtnkbkf"/><path class="nyxw1pb5f"/></g>`,
		"fallback": "uix-sharp:house-water",
	});
}

export default Component;
