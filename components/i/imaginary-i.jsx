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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ht4-d0djo {
  cx: 12px;
  cy: 5.5px;
  r: 1.5px;
}

.wr063mk4n {
  d: path("M9.25 10H12v10m-3.25 0h6.5");
}
</style><g class="hntgybcog"><path class="wr063mk4n"/><circle class="ht4-d0djo"/></g>`,
		"fallback": "iconoven:imaginary-i",
	});
}

export default Component;
