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
		"content": `<style>.r-i4c-a3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14v19H5ZM8.5 6v12M12 6v12m3.5-12v12");
}
</style><path class="r-i4c-a3j"/>`,
		"fallback": "uix-sharp:criminal-law",
	});
}

export default Component;
