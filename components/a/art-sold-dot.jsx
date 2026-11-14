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
		"content": `<style>.a06gk6brl {
  d: path("M13 17.5H2.5v-15h16V13");
}

.ljoo7nyco {
  fill: currentColor;
  d: path("M15.75 18.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.nobcn9b5m {
  d: path("M2.5 14L7 9.5l3.5 3.5l3-3l5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a06gk6brl"/><path class="nobcn9b5m"/><path class="ljoo7nyco"/></g>`,
		"fallback": "uix-sharp:art-sold-dot",
	});
}

export default Component;
