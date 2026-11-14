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
		"content": `<style>.ng1o5ybam {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c-3 4-7 8-7 12a7 7 0 0 0 14 0c0-4-4-8-7-12Zm0 7.5h.01M9 14.5h.01m5.99 0h.01M12 18h.01");
}
</style><path class="ng1o5ybam"/>`,
		"fallback": "uix-sharp:colloid",
	});
}

export default Component;
