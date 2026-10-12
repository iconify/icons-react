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
		"content": `<style>.jsya892xg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 13.75v-.5a3.5 3.5 0 0 1 1.5-6a3.6 3.6 0 0 1 7 0a3.5 3.5 0 0 1 1.5 6v.5Zm3 0v-2.5m4 2.5v-2.5m-7 5h10v5H7z");
}
</style><path class="jsya892xg"/>`,
		"fallback": "iconoven:chef-hat-star-sharp",
	});
}

export default Component;
