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
		"content": `<style>.ao3xx023d {
  d: path("M8.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm-5 15C3.5 16.75 7 14 12 14s8.5 2.75 8.5 7.5M12 14v3");
}

.kgx7w_iau {
  d: path("M8.5 17h7v4.5h-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ao3xx023d"/><path class="kgx7w_iau"/></g>`,
		"fallback": "uix-sharp:civil-servant",
	});
}

export default Component;
