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
		"content": `<style>.qptsx1byb {
  d: path("M4.25 9.5h6V15h-6zm9.5 0h6V15h-6zm-11 5.5h18.5m-16 0v6.25M18.75 15v6.25");
}

.qu3-hqbsn {
  cx: 7.25px;
  cy: 4.75px;
  r: 1.75px;
}

.s2aba_b7h {
  cx: 16.75px;
  cy: 4.75px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="qu3-hqbsn"/><circle class="s2aba_b7h"/><path class="qptsx1byb"/></g>`,
		"fallback": "iconoven:coworking-sharp",
	});
}

export default Component;
