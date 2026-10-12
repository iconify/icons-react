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
		"content": `<style>.boiqtuypj {
  cx: 15.75px;
  cy: 15.75px;
  r: 3.5px;
}

.hdmnq7b-k {
  d: path("M2.75 2.75h13v13h-13zm0 6.5h13m-6.5-6.5v13");
}

.stlv7x7mf {
  d: path("M18.25 18.25L21 21");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hdmnq7b-k"/><circle class="boiqtuypj"/><path class="stlv7x7mf"/></g>`,
		"fallback": "iconoven:contact-sheet-sharp",
	});
}

export default Component;
