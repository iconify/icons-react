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
		"content": `<style>.kouyg8b6l {
  d: path("M3.5 3.5h17v17h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_lh1jggx {
  d: path("M16 3.5L14.5 7L11 9l1.5 4l4-2l-2-4m-2 6L10 15.25l1.5 2.25l-3.5 3");
}
</style><g class="ulnmmdpxh"><path class="kouyg8b6l"/><path class="y_lh1jggx"/></g>`,
		"fallback": "uix-sharp:break-in",
	});
}

export default Component;
