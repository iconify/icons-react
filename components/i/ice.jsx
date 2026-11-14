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
		"content": `<style>.awthynk6v {
  d: path("M3 7.5h13.5L21 3m-4.5 4.5V21M6.25 15v-2.25a2 2 0 0 1 2-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.znm1y2b4o {
  d: path("M3 7.5L7.5 3H21v13.5L16.5 21H3Z");
}
</style><g class="ulnmmdpxh"><path class="znm1y2b4o"/><path class="awthynk6v"/></g>`,
		"fallback": "uix-sharp:ice",
	});
}

export default Component;
