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
		"content": `<style>.r6r5-xb_c {
  d: path("M5.5 5.5h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Zm-3 4.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xi9eqh2nl {
  fill: currentColor;
  d: path("M12 14.25h.01");
}
</style><g class="ulnmmdpxh"><path class="r6r5-xb_c"/><path class="xi9eqh2nl"/></g>`,
		"fallback": "uix-sharp:earbuds-case",
	});
}

export default Component;
