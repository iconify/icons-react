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
		"content": `<style>.g7r2n3-ke {
  d: path("m13 15.5l-3.75 3.75L5.5 15.5");
}

.qrtm-bc2v {
  d: path("M19.75 4.25H9.25v15");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qrtm-bc2v"/><path class="g7r2n3-ke"/></g>`,
		"fallback": "iconoven:corner-left-down-sharp",
	});
}

export default Component;
