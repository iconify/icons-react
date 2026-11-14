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
		"content": `<style>.j84u50tal {
  d: path("M8 21.5c0-4 1-5.5 2-6L9.5 12l1.75 1.75h1.5L14.5 12l-.5 3.5c1 .5 2 2 2 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ve6ykcybm {
  d: path("M3.5 2.5h17v19h-17Zm0 6.5h17M12 2.5V9");
}
</style><g class="ulnmmdpxh"><path class="ve6ykcybm"/><path class="j84u50tal"/></g>`,
		"fallback": "uix-sharp:cat-window",
	});
}

export default Component;
