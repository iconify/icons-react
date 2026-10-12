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
		"content": `<style>.awts9jb_z {
  d: path("M11.25 20.25h-8.5V3.75h18.5v7");
}

.p_flhjbml {
  cx: 8.5px;
  cy: 9px;
  r: 1.75px;
}

.smythfbbs {
  d: path("m2.75 16.25l4.1-4.1l1.125-1.112L9.1 12.15l2.4 2.4m1.75.7v-2h8v6.5h-5.5l-2.5 1.5Zm2.5 1.25h3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="awts9jb_z"/><circle class="p_flhjbml"/><path class="smythfbbs"/></g>`,
		"fallback": "iconoven:alt-text-sharp",
	});
}

export default Component;
