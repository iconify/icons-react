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
		"content": `<style>.dqqs19iyw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 2.5l-6.5 10h5l-1 9l7-11h-5Zm5 13h6m-2.25-2.25L21 15.5l-2.25 2.25");
}
</style><path class="dqqs19iyw"/>`,
		"fallback": "uix-sharp:automation-trigger",
	});
}

export default Component;
