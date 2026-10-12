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
		"content": `<style>.t6jcg-eqt {
  d: path("M8 12.75h8v4.75H8zM2.75 17.5h18.5v3.75H2.75V18Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y1btj4b9l {
  d: path("M4.75 17.5V8h14.5v9.5");
}
</style><g class="x2cwu0gfd"><path class="y1btj4b9l"/><path class="t6jcg-eqt"/></g>`,
		"fallback": "iconoven:butter-dish-sharp",
	});
}

export default Component;
