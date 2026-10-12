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
		"content": `<style>.hl-wh5bdz {
  d: path("M3.5 9.75h17m-15.75 3h14.5l.804-.002l-.054.802c-.5 4.4-3.6 7.7-8 7.7s-7.5-3.3-8-7.7l-.054-.802z");
}

.whn4d5n3f {
  d: path("M6.75 15.75q5.25 1.5 10.5 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hl-wh5bdz"/><path class="whn4d5n3f"/></g>`,
		"fallback": "iconoven:clay-pot-sharp",
	});
}

export default Component;
