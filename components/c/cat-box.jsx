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
		"content": `<style>.o-9_ar-fn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11.5h18V21H3Zm3.5 0V3L10 5.75h4L17.5 3v8.5M10 8.75h.01m3.99 0h.01");
}
</style><path class="o-9_ar-fn"/>`,
		"fallback": "uix-sharp:cat-box",
	});
}

export default Component;
