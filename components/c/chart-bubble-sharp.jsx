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
		"content": `<style>.lggwgsh6t {
  cx: 17.5px;
  cy: 16px;
  r: 1.5px;
}

.psk4tbz5v {
  cx: 15.25px;
  cy: 8.75px;
  r: 3.25px;
}

.vf_31rbpy {
  d: path("M3.75 3.75v16.5h16.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xftpa2b-b {
  cx: 9.25px;
  cy: 14.25px;
  r: 2px;
}
</style><g class="x2cwu0gfd"><path class="vf_31rbpy"/><circle class="xftpa2b-b"/><circle class="psk4tbz5v"/><circle class="lggwgsh6t"/></g>`,
		"fallback": "iconoven:chart-bubble-sharp",
	});
}

export default Component;
