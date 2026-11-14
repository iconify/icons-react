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
		"content": `<style>.d54j_4xxg {
  d: path("M9.5 9.5H17l-2 5H7.5Z");
}

.ozx-odbqi {
  d: path("M6 6.5h15.5l-3.5 11H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ozx-odbqi"/><path class="d54j_4xxg"/></g>`,
		"fallback": "uix-sharp:doormat",
	});
}

export default Component;
