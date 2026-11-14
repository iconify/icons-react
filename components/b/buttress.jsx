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
		"content": `<style>.mp31n_v8d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5H10v19H4.5ZM10 7l9.5 14.5H10M4.5 9H10m-5.5 6H10");
}
</style><path class="mp31n_v8d"/>`,
		"fallback": "uix-sharp:buttress",
	});
}

export default Component;
