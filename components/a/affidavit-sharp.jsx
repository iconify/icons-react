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
		"content": `<style>.azbktkldc {
  d: path("M8.25 9.5v-3h1.5m2.5 3v-3h1.5m-5.5 6.25h7.5m-7.5 2.75h7.5m-7.5 2.75h3.5");
}

.bh4biibbp {
  d: path("M4.75 2.75h14.5v18.5H4.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bh4biibbp"/><path class="azbktkldc"/></g>`,
		"fallback": "iconoven:affidavit-sharp",
	});
}

export default Component;
