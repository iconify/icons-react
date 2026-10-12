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
		"content": `<style>.f13673oiz {
  cx: 17px;
  cy: 12px;
  r: 2.25px;
}

.f3ssm6bjr {
  cx: 7.5px;
  cy: 12px;
  r: 3.25px;
}

.gsl_eibwq {
  d: path("M4.42 6.69a9.25 9.25 0 0 1 15.59.68m.4-2.21l-.4 2.21l-2.12-.76m1.69 10.7a9.25 9.25 0 0 1-15.59-.68m-.4 2.21l.4-2.21l2.12.76");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="f3ssm6bjr"/><circle class="f13673oiz"/><path class="gsl_eibwq"/></g>`,
		"fallback": "iconoven:binary-star-sharp",
	});
}

export default Component;
