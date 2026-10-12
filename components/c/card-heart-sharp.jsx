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
		"content": `<style>.bh4biibbp {
  d: path("M4.75 2.75h14.5v18.5H4.75z");
}

.pz5fx2u1w {
  d: path("M12 17c-2.75-1.75-5-3.75-5-6.25a2.5 2.5 0 0 1 5-.75a2.5 2.5 0 0 1 5 .75c0 2.5-2.25 4.5-5 6.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bh4biibbp"/><path class="pz5fx2u1w"/></g>`,
		"fallback": "iconoven:card-heart-sharp",
	});
}

export default Component;
