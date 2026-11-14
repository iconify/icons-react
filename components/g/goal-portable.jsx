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
		"content": `<style>.n6pvde36h {
  d: path("M2.75 18.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm15 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM9.5 3.75v13m5-13v13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vryr-xb_r {
  d: path("M4.5 16.75v-13h15v13");
}
</style><g class="ulnmmdpxh"><path class="vryr-xb_r"/><path class="n6pvde36h"/></g>`,
		"fallback": "uix-sharp:goal-portable",
	});
}

export default Component;
