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
		"content": `<style>.c1z7d51be {
  d: path("M10.23 4.54a8.25 8.25 0 1 0 8.98 8.98a6 6 0 1 1-8.98-8.98Z");
}

.jh67ewbre {
  d: path("m15.64 6.07l.48 1.07l.14.32l.35.03l1.16.12l.35.04l-.26.23l-.87.78l-.26.24l.07.34l.24 1.14l.08.34l-.31-.17l-1.01-.58l-.3-.18l-.3.18l-1.01.58l-.31.17l.08-.34l.24-1.14l.07-.34l-.26-.24l-.87-.78l-.26-.23l.35-.04l1.16-.12l.35-.03l.14-.32l.48-1.07l.14-.32z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="c1z7d51be"/><path class="jh67ewbre"/></g>`,
		"fallback": "iconoven:crescent-moon-star-sharp",
	});
}

export default Component;
