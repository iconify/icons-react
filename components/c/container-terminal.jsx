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
		"content": `<style>.tw0gnv4hy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h18M4.5 15h6v5.5h-6Zm6.5 0h6v5.5h-6ZM7.5 9.5h6V15h-6Zm9.5-5V12h3");
}
</style><path class="tw0gnv4hy"/>`,
		"fallback": "uix-sharp:container-terminal",
	});
}

export default Component;
