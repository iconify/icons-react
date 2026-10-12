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
		"content": `<style>.ht4-d0djo {
  cx: 12px;
  cy: 5.5px;
  r: 1.5px;
}

.wr063mk4n {
  d: path("M9.25 10H12v10m-3.25 0h6.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="wr063mk4n"/><circle class="ht4-d0djo"/></g>`,
		"fallback": "iconoven:imaginary-i-sharp",
	});
}

export default Component;
