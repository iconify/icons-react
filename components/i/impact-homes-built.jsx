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
		"content": `<style>.brswsknxr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19v-7l2.25-3L7 12v7m2.75 0V8L12 5l2.25 3v11M17 19v-7l2.25-3l2.25 3v7m-19 0h19");
}
</style><path class="brswsknxr"/>`,
		"fallback": "uix-sharp:impact-homes-built",
	});
}

export default Component;
