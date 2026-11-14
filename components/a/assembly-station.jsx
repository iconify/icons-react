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
		"content": `<style>.nngwmgbxf {
  d: path("M3.75 15h13.5v3H3.75Zm5.5-4.5h8V15h-8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x-utcfczg {
  d: path("M10.75 5.5h9.5V21h-6v-3m-1-15.5v8m-2.5-8h5");
}
</style><g class="ulnmmdpxh"><path class="nngwmgbxf"/><path class="x-utcfczg"/></g>`,
		"fallback": "uix-sharp:assembly-station",
	});
}

export default Component;
