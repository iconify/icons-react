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
		"content": `<style>.ubbqahuxg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v12.5h-19ZM7 15.5V21m10-5.5V21M12 3v12.5M2.5 9.25h19");
}
</style><path class="ubbqahuxg"/>`,
		"fallback": "uix-sharp:billboard-digital",
	});
}

export default Component;
