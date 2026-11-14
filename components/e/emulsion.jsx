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
		"content": `<style>.aaa7ju7uv {
  d: path("M7.75 16a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-2.75-5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.l6n6noo0n {
  d: path("M12 2.5s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l6n6noo0n"/><path class="aaa7ju7uv"/></g>`,
		"fallback": "uix-sharp:emulsion",
	});
}

export default Component;
