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
		"content": `<style>.cgtll7f9a {
  d: path("m12 3l8.5 4.5v9L12 21l-8.5-4.5v-9Z");
}

.u8054pfip {
  d: path("M3.5 7.5L12 12l8.5-4.5M12 12v9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cgtll7f9a"/><path class="u8054pfip"/></g>`,
		"fallback": "uix-sharp:data-cube",
	});
}

export default Component;
