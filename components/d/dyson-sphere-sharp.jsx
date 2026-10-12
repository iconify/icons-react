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
		"content": `<style>.gp0egaclj {
  cx: 12px;
  cy: 12px;
  r: 3px;
}

.sy8yhvbxq {
  d: path("M17.66 9.36a6.25 6.25 0 0 1 0 5.28m-3.02 3.02a6.25 6.25 0 0 1-5.28 0m-3.02-3.02a6.25 6.25 0 0 1 0-5.28m3.02-3.02a6.25 6.25 0 0 1 5.28 0m.52-3.03a9.25 9.25 0 0 1 5.53 5.53m0 6.32a9.25 9.25 0 0 1-5.53 5.53m-6.32 0a9.25 9.25 0 0 1-5.53-5.53m0-6.32a9.25 9.25 0 0 1 5.53-5.53");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="gp0egaclj"/><path class="sy8yhvbxq"/></g>`,
		"fallback": "iconoven:dyson-sphere-sharp",
	});
}

export default Component;
