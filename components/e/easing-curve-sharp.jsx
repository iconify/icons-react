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
		"content": `<style>.dinwgx7wr {
  d: path("M6 18c6.5 0 5.5-12 12-12");
}

.gx1xg5ykg {
  d: path("M2.75 2.75v18.5h18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gx1xg5ykg"/><path class="dinwgx7wr"/></g>`,
		"fallback": "iconoven:easing-curve-sharp",
	});
}

export default Component;
