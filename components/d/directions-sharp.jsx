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
		"content": `<style>.p66rk-b3z {
  d: path("M9.25 15.25V11h6.5M13.5 8.75L15.75 11l-2.25 2.25");
}

.ud1xjfb4a {
  d: path("m13.59 4.34l6.07 6.07L21.25 12l-1.59 1.59l-6.07 6.07L12 21.25l-1.59-1.59l-6.07-6.07L2.75 12l1.59-1.59l6.07-6.07L12 2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ud1xjfb4a"/><path class="p66rk-b3z"/></g>`,
		"fallback": "iconoven:directions-sharp",
	});
}

export default Component;
