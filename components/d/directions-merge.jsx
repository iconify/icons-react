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
		"content": `<style>.a9ro1z9dc {
  d: path("M9.5 10L12 7.5l2.5 2.5m.25 5.25L12 12.5");
}

.m-gh-7b_a {
  d: path("M12 2.25L21.75 12L12 21.75L2.25 12Zm0 14.25v-9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m-gh-7b_a"/><path class="a9ro1z9dc"/></g>`,
		"fallback": "uix-sharp:directions-merge",
	});
}

export default Component;
