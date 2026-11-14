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
		"content": `<style>.m7latrbdk {
  d: path("m12 3l9.5 16.75h-19Z");
}

.r2-eo_i_z {
  d: path("M10.5 11.75c0-.85.7-1.5 1.5-1.5s1.5.65 1.5 1.5c0 1.15-1.5 1.35-1.5 2.5M12 17h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m7latrbdk"/><path class="r2-eo_i_z"/></g>`,
		"fallback": "uix-sharp:help-triangle",
	});
}

export default Component;
