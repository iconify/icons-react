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
		"content": `<style>.b-b4vmppo {
  d: path("M6.5 21v-9h11v9");
}

.bsa6d-9yr {
  d: path("M9 16.5h6L13.75 19h-3.5Z");
}

.e4z_quizr {
  d: path("M3.5 21V10L12 3.5l8.5 6.5v11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e4z_quizr"/><path class="b-b4vmppo"/><path class="bsa6d-9yr"/></g>`,
		"fallback": "uix-sharp:boathouse",
	});
}

export default Component;
