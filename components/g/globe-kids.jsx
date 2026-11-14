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
		"content": `<style>.mxzl1tbmo {
  d: path("M5.5 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v6meuoepj {
  d: path("M9 9.5a3 6.5 0 1 0 6 0a3 6.5 0 1 0-6 0Zm-3.5 0h13M12 16v4.5m-4 0h8");
}
</style><g class="ulnmmdpxh"><path class="mxzl1tbmo"/><path class="v6meuoepj"/></g>`,
		"fallback": "uix-sharp:globe-kids",
	});
}

export default Component;
