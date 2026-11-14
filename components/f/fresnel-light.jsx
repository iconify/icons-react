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
		"content": `<style>.bdm1fwb9k {
  d: path("M10 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 7.5v4m-4 0h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_-mc7bkx {
  d: path("M4.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.w0uzrmbmf {
  d: path("M7.25 10a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="v_-mc7bkx"/><path class="w0uzrmbmf"/><path class="bdm1fwb9k"/></g>`,
		"fallback": "uix-sharp:fresnel-light",
	});
}

export default Component;
