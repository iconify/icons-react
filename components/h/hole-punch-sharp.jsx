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
		"content": `<style>.hvouy6jtu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 15.25h18.5v5.5H2.75zM5.25 11h3v4.25h-3zm8-1.75h3v6h-3zm-9.77-.93l16.29-4.14l.73-.18l.24.71l.27.83l.24.71l-.73.18l-15.79 3.89l-.73.18l-.4-.64l-.45-.72l-.4-.64z");
}
</style><path class="hvouy6jtu"/>`,
		"fallback": "iconoven:hole-punch-sharp",
	});
}

export default Component;
