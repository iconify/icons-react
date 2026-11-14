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
		"content": `<style>.r3qeus1wg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.164 15.955L7.5 13.5h-4v-5h4l9.5-5v8.665M6 13.5l1.5 5M15 15h6m-5 0v5.5q0 1 1 1h2q1 0 1-1V15");
}
</style><path class="r3qeus1wg"/>`,
		"fallback": "uix-sharp:campaign-delete",
	});
}

export default Component;
