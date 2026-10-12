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
		"content": `<style>.cs5e_nsbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 10.25h15v9.5h-15zm15 4.75h2.5M9 10.25v9.5m4.5-9.5v9.5m-2.5-9.5C10 9 6.75 8 6.75 6V4h2C10.25 4 11 6.5 11 10.25Zm2 0C14 9 17.25 8 17.25 6V4h-2C13.75 4 13 6.5 13 10.25Z");
}
</style><path class="cs5e_nsbr"/>`,
		"fallback": "iconoven:bee-sharp",
	});
}

export default Component;
