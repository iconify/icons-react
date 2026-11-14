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
		"content": `<style>.hnxn52b8s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0V13m3 2.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0V9m3 2.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0V3");
}
</style><path class="hnxn52b8s"/>`,
		"fallback": "uix-sharp:chorus-effect",
	});
}

export default Component;
