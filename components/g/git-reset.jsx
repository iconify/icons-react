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
		"content": `<style>.apr4zmbhp {
  d: path("M19 3v4.5a4.5 4.5 0 0 1-4.5 4.5H11");
}

.ensswnb6t {
  d: path("M13.5 9.5L11 12l2.5 2.5M6 3v6.75M3.75 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM6 14.25V21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="apr4zmbhp"/><path class="ensswnb6t"/></g>`,
		"fallback": "uix-sharp:git-reset",
	});
}

export default Component;
