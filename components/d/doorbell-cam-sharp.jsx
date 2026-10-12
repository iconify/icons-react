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
		"content": `<style>.fuldhtbew {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 16a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 1 1 3.5 0");
}

.nntrnih8q {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 8.5h.01");
}

.t66mq7qpn {
  cx: 12px;
  cy: 8.5px;
  r: 3px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vf785v0lm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.75h11.5v18.5H6.25z");
}
</style><g class="ux2u0rbkq"><path class="vf785v0lm"/><circle class="t66mq7qpn"/><path class="nntrnih8q"/><path class="fuldhtbew"/></g>`,
		"fallback": "iconoven:doorbell-cam-sharp",
	});
}

export default Component;
