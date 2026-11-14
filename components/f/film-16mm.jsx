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
		"content": `<style>.qwsiu5bou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5v19m17-19v19M6.25 5h2.5v3h-2.5Zm0 11h2.5v3h-2.5ZM11.5 5h6.25v14H11.5Z");
}
</style><path class="qwsiu5bou"/>`,
		"fallback": "uix-sharp:film-16mm",
	});
}

export default Component;
