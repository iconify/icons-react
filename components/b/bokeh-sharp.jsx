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
		"content": `<style>.g8ubobbck {
  cx: 8px;
  cy: 8px;
  r: 5.25px;
}

.m-b__ibxs {
  cx: 6px;
  cy: 18.5px;
  r: 2px;
}

.pf8xrvdha {
  cx: 16.75px;
  cy: 16.5px;
  r: 4.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y2v2ieaqm {
  cx: 18.25px;
  cy: 6px;
  r: 2.25px;
}
</style><g class="x2cwu0gfd"><circle class="g8ubobbck"/><circle class="pf8xrvdha"/><circle class="y2v2ieaqm"/><circle class="m-b__ibxs"/></g>`,
		"fallback": "iconoven:bokeh-sharp",
	});
}

export default Component;
