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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xhxohloia {
  d: path("M9 11a3 3.75 0 1 0 6 0a3 3.75 0 1 0-6 0Z");
}

.zfqqr8bin {
  d: path("M3.5 21.5V20c0-2.5 1.5-4 2.5-4.5V10c0-4 3-6.5 6-7.5c3 1 6 3.5 6 7.5v5.5c1 .5 2.5 2 2.5 4.5v1.5Z");
}
</style><g class="ulnmmdpxh"><path class="zfqqr8bin"/><path class="xhxohloia"/></g>`,
		"fallback": "uix-sharp:anonymous-source",
	});
}

export default Component;
