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
		"content": `<style>.s9lxy1kwt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h11v4.5h-11ZM8 14.5h13.5V19H8Zm8.5-7.25h5M19.25 5l2.25 2.25l-2.25 2.25");
}
</style><path class="s9lxy1kwt"/>`,
		"fallback": "uix-sharp:gantt-shift",
	});
}

export default Component;
