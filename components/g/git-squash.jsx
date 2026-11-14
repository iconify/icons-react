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
		"content": `<style>.t-k61xbox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5H7V7H2.5Zm0 7.25H7v4.5H2.5Zm0 7.25H7v4.5H2.5Zm13-8h6v6h-6Zm-5.75 3h3M11 10.25L12.75 12L11 13.75");
}
</style><path class="t-k61xbox"/>`,
		"fallback": "uix-sharp:git-squash",
	});
}

export default Component;
