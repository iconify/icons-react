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
		"content": `<style>.dyy5pkbxx {
  cx: 12px;
  cy: 6.75px;
  r: 2.25px;
}

.ox6vyub6l {
  cx: 18.75px;
  cy: 8px;
  r: 2px;
}

.qery7acki {
  d: path("M2.75 13h18.5v8.25H2.75zm0 4.25h18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zp1n3tbnd {
  cx: 5.25px;
  cy: 8px;
  r: 2px;
}
</style><g class="x2cwu0gfd"><circle class="zp1n3tbnd"/><circle class="ox6vyub6l"/><circle class="dyy5pkbxx"/><path class="qery7acki"/></g>`,
		"fallback": "iconoven:crate-produce-sharp",
	});
}

export default Component;
