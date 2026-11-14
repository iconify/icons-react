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
		"content": `<style>.n58ju_blk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8h6c3.5 2.5 5 5.5 5 8c0 3.5-3 5.5-8 5.5s-8-2-8-5.5c0-2.5 1.5-5.5 5-8Zm0 0L7 4.5h10L15 8Zm1-3.5c0-2.75 4-2.75 4 0");
}
</style><path class="n58ju_blk"/>`,
		"fallback": "uix-sharp:chalk-bag",
	});
}

export default Component;
