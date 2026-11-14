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
		"content": `<style>.nom8dyxss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4h13v6.5H5Zm7.2 14H2.5v-7.5H19v1.8M15 4v6.5m-9 0V18m9-.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm4.75 2l2 2");
}
</style><path class="nom8dyxss"/>`,
		"fallback": "uix-sharp:book-stack-search",
	});
}

export default Component;
