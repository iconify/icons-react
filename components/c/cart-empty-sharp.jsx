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
		"content": `<style>.fpq61538s {
  cx: 9.25px;
  cy: 18.75px;
  r: 1.5px;
}

.jl3cnnrpl {
  d: path("M8 6.25h2.5m2.25 0h2.5m2.25 0h2l1.276.001l-.306 1.239l-.36 1.46m-.51 2l-.33 1.34l-.245 1.677L17.33 14h-.83m-2.25 0H12");
}

.td-q0wbcw {
  d: path("M2.75 3.75h1.4l1.184-.001L5.61 4.9L7.65 14h2.1");
}

.vzw8i56kn {
  cx: 17.25px;
  cy: 18.75px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="td-q0wbcw"/><circle class="fpq61538s"/><circle class="vzw8i56kn"/><path class="jl3cnnrpl"/></g>`,
		"fallback": "iconoven:cart-empty-sharp",
	});
}

export default Component;
