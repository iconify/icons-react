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
		"content": `<style>.g3z48d9si {
  d: path("M4.75 7.75h14.5v8.5H4.75Zm3 2.75v3");
}

.s8hy96b8z {
  d: path("M4.25 5h15.5A2.25 2.25 0 0 1 22 7.25v9.5A2.25 2.25 0 0 1 19.75 19H4.25A2.25 2.25 0 0 1 2 16.75v-9.5A2.25 2.25 0 0 1 4.25 5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s8hy96b8z"/><path class="g3z48d9si"/></g>`,
		"fallback": "uix-sharp:input-field-focused",
	});
}

export default Component;
