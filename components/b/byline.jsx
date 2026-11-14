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
		"content": `<style>.jicjzyb6b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm-2 12c0-3.5 2.5-5.5 5.5-5.5s5.5 2 5.5 5.5m3-8h5");
}
</style><path class="jicjzyb6b"/>`,
		"fallback": "uix-sharp:byline",
	});
}

export default Component;
