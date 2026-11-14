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
		"content": `<style>.d33dmjb-e {
  d: path("M8.5 12.25H12v3.5H8.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zrux4cf_s {
  d: path("M4 6h12.5l-2 15H6Zm.25 3.5h12M14 6a3.5 3.5 0 0 1 7 0Z");
}
</style><g class="ulnmmdpxh"><path class="zrux4cf_s"/><path class="d33dmjb-e"/></g>`,
		"fallback": "uix-sharp:cola-with-lemon",
	});
}

export default Component;
