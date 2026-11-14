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
		"content": `<style>.agsrerbqn {
  d: path("M10 13.5h5V17h-5ZM4.5 7l-2-2.5m2 8.5l-2 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xrhbezbul {
  d: path("M3.5 10a8.5 4.5 0 1 0 17 0a8.5 4.5 0 1 0-17 0Z");
}
</style><g class="ulnmmdpxh"><path class="xrhbezbul"/><path class="agsrerbqn"/></g>`,
		"fallback": "uix-sharp:airship",
	});
}

export default Component;
