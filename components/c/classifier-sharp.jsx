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
		"content": `<style>.t79tfrbpw {
  d: path("m17.54 3.03l2.17 3.94l.29.53h-5.5l.29-.53l2.17-3.94l.29-.53zM6.75 10v2.25M17.25 10v2.25m-14.5 2h8v7h-8zm10.5 0h8v7h-8z");
}

.v81x5hb6f {
  cx: 6.75px;
  cy: 5.25px;
  r: 2.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="v81x5hb6f"/><path class="t79tfrbpw"/></g>`,
		"fallback": "iconoven:classifier-sharp",
	});
}

export default Component;
