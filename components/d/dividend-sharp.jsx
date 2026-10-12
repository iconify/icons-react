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
		"content": `<style>.a7q8jib6e {
  cx: 12px;
  cy: 7.25px;
  r: 2px;
}

.l0r7vlbov {
  cx: 12px;
  cy: 7.25px;
  r: 4.5px;
}

.nlor3-bpa {
  cx: 17.75px;
  cy: 17.5px;
  r: 3.25px;
}

.qo9rs7j5k {
  cx: 6.25px;
  cy: 17.5px;
  r: 3.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="l0r7vlbov"/><circle class="a7q8jib6e"/><circle class="qo9rs7j5k"/><circle class="nlor3-bpa"/></g>`,
		"fallback": "iconoven:dividend-sharp",
	});
}

export default Component;
