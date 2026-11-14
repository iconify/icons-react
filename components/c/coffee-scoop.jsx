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
		"content": `<style>.ks31rzv7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 6.75h10v4a5 5 0 0 1-5 5a5 5 0 0 1-5-5Zm0 3l-7.5 7.5");
}
</style><path class="ks31rzv7y"/>`,
		"fallback": "uix-sharp:coffee-scoop",
	});
}

export default Component;
