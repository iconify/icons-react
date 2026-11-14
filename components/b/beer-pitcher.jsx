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
		"content": `<style>.a774cdb_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h12.5v16A1.5 1.5 0 0 1 15 21H7a1.5 1.5 0 0 1-1.5-1.5V6Zm12.5 3h2A1.5 1.5 0 0 1 20 8v6.5a1.5 1.5 0 0 1-1.5 1.5h-2m-11-8h11");
}
</style><path class="a774cdb_w"/>`,
		"fallback": "uix-sharp:beer-pitcher",
	});
}

export default Component;
