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
		"content": `<style>.tbj3gibyf {
  d: path("M2.5 12L9 4.5h12v15H9Z");
}

.thk7qg-cz {
  d: path("M6.25 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm6.25 4.5l5.5-9M13 9h.01m4.49 6h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tbj3gibyf"/><path class="thk7qg-cz"/></g>`,
		"fallback": "uix-sharp:affiliate-code",
	});
}

export default Component;
