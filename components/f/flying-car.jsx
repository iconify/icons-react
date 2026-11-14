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
		"content": `<style>.bhw7tp7of {
  d: path("M3 16.5V14l3-3h7l3.5 2.5h3c1 0 1.5.5 1.5 1.25v1.75ZM7 11h3.5L7 5.5H4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y6x24r1an {
  d: path("M5 17.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="bhw7tp7of"/><path class="y6x24r1an"/></g>`,
		"fallback": "uix-sharp:flying-car",
	});
}

export default Component;
