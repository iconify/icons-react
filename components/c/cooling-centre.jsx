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
		"content": `<style>.tg-owvb9k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10.5L12 3.25l8.5 7.25v10h-17Zm8.5-.25v7.5M8.75 12l6.5 4m-6.5 0l6.5-4");
}
</style><path class="tg-owvb9k"/>`,
		"fallback": "uix-sharp:cooling-centre",
	});
}

export default Component;
