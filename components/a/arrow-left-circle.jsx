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
		"content": `<style>.oqb3-vbyd {
  d: path("m11.5 16l-4-4l4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xpgsosbof {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm14 0h-9");
}
</style><g class="ulnmmdpxh"><path class="xpgsosbof"/><path class="oqb3-vbyd"/></g>`,
		"fallback": "uix-sharp:arrow-left-circle",
	});
}

export default Component;
