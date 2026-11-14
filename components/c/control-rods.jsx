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
		"content": `<style>.bwxh-2bau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9h17v12.5h-17ZM6 3h12M8 3v13m4-13v13m4-13v13");
}
</style><path class="bwxh-2bau"/>`,
		"fallback": "uix-sharp:control-rods",
	});
}

export default Component;
