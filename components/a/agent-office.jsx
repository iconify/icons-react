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
		"content": `<style>.nbyf0gz5s {
  d: path("M3.5 3h17v18.5h-17Z");
}

.pglw4jure {
  d: path("M6.25 6.5H8.5v2.25H6.25Zm4.5 0h2.5v2.25h-2.5Zm4.75 0h2.25v2.25H15.5Zm-5.5 15v-6h4v6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nbyf0gz5s"/><path class="pglw4jure"/></g>`,
		"fallback": "uix-sharp:agent-office",
	});
}

export default Component;
