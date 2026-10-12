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
		"content": `<style>.fq5-s9bgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.5h7.5m-7.5 4h9m-9 4h6m4 3.5C12.5 12 16 7.5 20.5 6.25c.5 7-2.75 13.5-7.75 13.75Z");
}
</style><path class="fq5-s9bgh"/>`,
		"fallback": "iconoven:air-quality-sharp",
	});
}

export default Component;
