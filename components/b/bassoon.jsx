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
		"content": `<style>.d73ngsbty {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.5 13.5h.01M14.5 17h.01");
}

.ex3vqciaq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5h5");
}

.n5ralib5s {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10.5c-2.5 0-4.25-1.5-5-4.25l-.5-1.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ywm88b9-i {
  width: 5px;
  height: 18.5px;
  x: 12px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.75px;
}
</style><g class="y9tr6bcfx"><rect class="ywm88b9-i"/><path class="ex3vqciaq"/><path class="d73ngsbty"/><path class="n5ralib5s"/></g>`,
		"fallback": "iconoven:bassoon",
	});
}

export default Component;
