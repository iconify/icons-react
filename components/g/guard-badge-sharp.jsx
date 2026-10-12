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
		"content": `<style>.jk29lmi6l {
  d: path("m12.14 7.57l.89 1.99l.15.32l.34.04l2.17.23l.35.04l-.26.23l-1.62 1.46l-.26.24l.07.34l.46 2.14l.07.34l-.31-.18l-1.89-1.09l-.3-.17l-.3.17l-1.89 1.09l-.31.18l.07-.34l.46-2.14l.07-.34l-.26-.24l-1.62-1.46l-.26-.23l.35-.04l2.17-.23l.34-.04l.15-.32l.89-1.99l.14-.32z");
}

.u57yq2bni {
  d: path("m12 2.75l6.6 2.45l.652.244l-.002.696v5.26c0 4.4-2.9 7.6-7.25 9.85C7.65 19 4.75 15.8 4.75 11.4V6.14l-.002-.696L5.4 5.2Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="u57yq2bni"/><path class="jk29lmi6l"/></g>`,
		"fallback": "iconoven:guard-badge-sharp",
	});
}

export default Component;
