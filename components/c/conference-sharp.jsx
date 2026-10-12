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
		"content": `<style>.aeekdrycf {
  cx: 18.5px;
  cy: 18px;
  r: 2px;
}

.fggvvekwy {
  cx: 12px;
  cy: 18px;
  r: 2px;
}

.k7dqcnbgn {
  d: path("M3.75 2.75h16.5v10H3.75zm4 5h8.5");
}

.u_urt4jrw {
  cx: 5.5px;
  cy: 18px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="k7dqcnbgn"/><circle class="u_urt4jrw"/><circle class="fggvvekwy"/><circle class="aeekdrycf"/></g>`,
		"fallback": "iconoven:conference-sharp",
	});
}

export default Component;
