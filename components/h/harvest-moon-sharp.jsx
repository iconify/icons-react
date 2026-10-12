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
		"content": `<style>.s8a7ckbjq {
  d: path("M6.5 21.25V10.5M2.75 21.25h18.5M6.5 9.5q2.5-2.5 0-5q-2.5 2.5 0 5Zm0 4l.04-2.79l-2.79.04l-.04 2.79zm0 0l2.79.04l-.04-2.79l-2.79-.04z");
}

.uo05mphwy {
  cx: 15px;
  cy: 8.25px;
  r: 5.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="uo05mphwy"/><path class="s8a7ckbjq"/></g>`,
		"fallback": "iconoven:harvest-moon-sharp",
	});
}

export default Component;
