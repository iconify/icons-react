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
		"content": `<style>.iv6b4bbza {
  d: path("m3.84 8.89l3.97.51l-.51 3.97");
}

.rs8zf43rq {
  d: path("M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0");
}

.vud8ldbsd {
  d: path("M13.95 6.38A9 4.5-30 1 1 7.81 9.4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rs8zf43rq"/><path class="vud8ldbsd"/><path class="iv6b4bbza"/></g>`,
		"fallback": "iconoven:arrow-orbit-sharp",
	});
}

export default Component;
