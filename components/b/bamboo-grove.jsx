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
		"content": `<style>.h7xhj4a2z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5h19m-15 0v-6m0-2.75V6M12 21.5v-4m0-2.75V9m0-2.75V2.5m5.5 19V14m0-2.75V8m-11 1.5q-3 0-4-3.5q3 .5 4 3.5Zm11 1.75q3 0 4-3.5q-3 .5-4 3.5Z");
}
</style><path class="h7xhj4a2z"/>`,
		"fallback": "uix-sharp:bamboo-grove",
	});
}

export default Component;
