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
		"content": `<style>.h_9d4tbof {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 10.75h.01m4.99 5h.01");
}

.qhti0ubqs {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4m-2 0v2.5m-2.5 10.5l5-5");
}

.uk-2p8vqh {
  cx: 12px;
  cy: 13.25px;
  r: 8px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="uk-2p8vqh"/><path class="qhti0ubqs"/><path class="h_9d4tbof"/></g>`,
		"fallback": "iconoven:countdown-sale",
	});
}

export default Component;
