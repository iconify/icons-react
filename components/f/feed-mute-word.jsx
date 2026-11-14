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
		"content": `<style>.pjf8fim4c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.9 5H19m-7 0v3.1m0 7.8v3.6m-8.5-16l17 17");
}
</style><path class="pjf8fim4c"/>`,
		"fallback": "uix-sharp:feed-mute-word",
	});
}

export default Component;
