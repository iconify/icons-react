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
		"content": `<style>.r7utbbc1z {
  d: path("m15.5 9l-1.75-3h-3.5L8.5 9l1.75 3h3.5Zm0 6l-1.75-3h-3.5L8.5 15l1.75 3h3.5Z");
}

.u1xdz7bbn {
  d: path("M10.25 12L8.5 9H5l-1.75 3L5 15h3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uybx2g1pl {
  d: path("M20.75 12L19 9h-3.5l-1.75 3l1.75 3H19Z");
}
</style><g class="ulnmmdpxh"><path class="u1xdz7bbn"/><path class="r7utbbc1z"/><path class="uybx2g1pl"/></g>`,
		"fallback": "uix-sharp:graphene",
	});
}

export default Component;
