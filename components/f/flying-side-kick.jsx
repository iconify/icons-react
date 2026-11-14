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
		"content": `<style>.gr0fknb3w {
  d: path("M3 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM8 9l3 4.5h10m-10 0l-4 3l3 3.5");
}

.i_pgfyvot {
  d: path("m3.5 12l5-2.5l5-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gr0fknb3w"/><path class="i_pgfyvot"/></g>`,
		"fallback": "uix-sharp:flying-side-kick",
	});
}

export default Component;
