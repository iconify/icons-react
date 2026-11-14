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
		"content": `<style>.hnicdsb8p {
  d: path("M13.75 17a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm5.75 2.5l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y-vcs1n9l {
  d: path("M11.7 20H3V2h14v9M6.5 6.5h7m-7 4h7m-7 4H10");
}
</style><g class="ulnmmdpxh"><path class="y-vcs1n9l"/><path class="hnicdsb8p"/></g>`,
		"fallback": "uix-sharp:article-search",
	});
}

export default Component;
