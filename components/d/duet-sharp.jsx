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
		"content": `<style>.adjr2do3c {
  d: path("M2.75 3.75h18.5v16.5H2.75zm9.25 0v16.5");
}

.b3_k96hhs {
  d: path("M14.1 16a2.5 2.5 0 0 1 5 0");
}

.k96j4-b7r {
  d: path("M4.9 16a2.5 2.5 0 0 1 5 0");
}

.phidi_btw {
  cx: 16.6px;
  cy: 10px;
  r: 1.75px;
}

.v4wf3czoy {
  cx: 7.4px;
  cy: 10px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="adjr2do3c"/><circle class="v4wf3czoy"/><path class="k96j4-b7r"/><circle class="phidi_btw"/><path class="b3_k96hhs"/></g>`,
		"fallback": "iconoven:duet-sharp",
	});
}

export default Component;
