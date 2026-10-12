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
		"content": `<style>.n9cj3_bbd {
  d: path("m7.25 12l2.5-2.5l2 1.5l3-3.25m-6.25 7.5l-1.75 6m8.75-6l1.75 6");
}

.prvxaabkf {
  d: path("M5 5.25h14.75v7.5l-.53.53l-1.44 1.44l-.53.53h-13v-10z");
}

.q-mkr_tli {
  d: path("M2.75 2.75h18.5v2.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="q-mkr_tli"/><path class="prvxaabkf"/><path class="n9cj3_bbd"/></g>`,
		"fallback": "iconoven:flipchart-sharp",
	});
}

export default Component;
