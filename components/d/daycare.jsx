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
		"content": `<style>.aa7hez57j {
  d: path("m3 15l9-5.5l9 5.5v6.5H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xad9vab2f {
  d: path("M10 21.5v-4a2 2 0 0 1 4 0v4M8 9.75a4 4 0 1 1 8 0m-4-6V2M8 5.5L6.5 4M16 5.5L17.5 4");
}
</style><g class="ulnmmdpxh"><path class="aa7hez57j"/><path class="xad9vab2f"/></g>`,
		"fallback": "uix-sharp:daycare",
	});
}

export default Component;
