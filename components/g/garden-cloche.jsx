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
		"content": `<style>.gksyehfcl {
  d: path("M5 21v-9c0-4.5 3-7 7-7s7 2.5 7 7v9M3 21h18M12 5V3m0 18v-6");
}

.kgpdbmadn {
  d: path("M12 15c-2.5 0-4-1.5-4-4c2.5 0 4 1.5 4 4Zm0 0c2.5 0 4-1.5 4-4c-2.5 0-4 1.5-4 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gksyehfcl"/><path class="kgpdbmadn"/></g>`,
		"fallback": "uix-sharp:garden-cloche",
	});
}

export default Component;
