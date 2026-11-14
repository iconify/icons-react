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
		"content": `<style>.fjtjupbjm {
  d: path("M4.5 9.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.q5tdxhbzx {
  d: path("M8.5 16.25v5.25l3.5-1.75l3.5 1.75v-5.25M12.75 5.5l-3.25 5H12l-.75 3.25L14.5 8.5H12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fjtjupbjm"/><path class="q5tdxhbzx"/></g>`,
		"fallback": "uix-sharp:badge-speed",
	});
}

export default Component;
