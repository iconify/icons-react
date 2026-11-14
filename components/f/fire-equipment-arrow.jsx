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
		"content": `<style>.axtrfkbhy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7h7v14H4Zm2 0V4h3v3m0-3h4l3 4.5m-1 10h6.5m-3-3l3 3l-3 3");
}
</style><path class="axtrfkbhy"/>`,
		"fallback": "uix-sharp:fire-equipment-arrow",
	});
}

export default Component;
