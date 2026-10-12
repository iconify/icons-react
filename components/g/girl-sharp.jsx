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
		"content": `<style>.hu6c6ebjx {
  d: path("M6.5 21.25h11.75v-.75c0-2.2-2.81-3.75-6.25-3.75S5.75 18.3 5.75 20.5v.75z");
}

.o5liqyaba {
  cx: 8.3px;
  cy: 7.6px;
  r: 1.5px;
}

.ox23iccdt {
  cx: 15.7px;
  cy: 7.6px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xn-0agmvk {
  cx: 12px;
  cy: 10px;
  r: 3.25px;
}
</style><g class="x2cwu0gfd"><circle class="xn-0agmvk"/><path class="hu6c6ebjx"/><circle class="o5liqyaba"/><circle class="ox23iccdt"/></g>`,
		"fallback": "iconoven:girl-sharp",
	});
}

export default Component;
