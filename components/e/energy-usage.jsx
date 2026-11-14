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
		"content": `<style>.jg-fi8rtf {
  d: path("M7 6.5h10v5H7ZM19.25 15l-3.5 3.5h4.5l-3.5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vkxha8b-w {
  d: path("M10.3 20H3.5V3h17v9.3");
}
</style><g class="ulnmmdpxh"><path class="vkxha8b-w"/><path class="jg-fi8rtf"/></g>`,
		"fallback": "uix-sharp:energy-usage",
	});
}

export default Component;
