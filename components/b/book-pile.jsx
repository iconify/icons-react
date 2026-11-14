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
		"content": `<style>.f2hczeb6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15.5h18V21H3ZM4.5 10H20v5.5H4.5Zm.871-5.652l12.873-1.809l.626 4.456L5.997 8.804ZM17 18.25h4m-16.5-5.5h4");
}
</style><path class="f2hczeb6h"/>`,
		"fallback": "uix-sharp:book-pile",
	});
}

export default Component;
