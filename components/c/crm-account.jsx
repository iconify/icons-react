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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v5vgenb3a {
  d: path("M2.5 6a2 2 0 0 1 2-2H9l2 2h8.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z");
}

.var4abmhl {
  d: path("M10 10.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM8 20a4 3.5 0 0 1 8 0");
}
</style><g class="ulnmmdpxh"><path class="v5vgenb3a"/><path class="var4abmhl"/></g>`,
		"fallback": "uix-sharp:crm-account",
	});
}

export default Component;
