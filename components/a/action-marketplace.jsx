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
		"content": `<style>.aufr3tbrr {
  d: path("M8 20.5V15h4v2.6m6.75-4.1L15 18.25h3L16.75 22L21 16.75h-3Z");
}

.bn5xnybil {
  d: path("m3.5 8l2-4.5h13l2 4.5a2.125 2.125 0 0 1-4.25 0A2.125 2.125 0 0 1 12 8a2.125 2.125 0 0 1-4.25 0A2.125 2.125 0 0 1 3.5 8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zo_drspwk {
  d: path("M5 10v10.5h4.7m9.3-7.6V10");
}
</style><g class="ulnmmdpxh"><path class="bn5xnybil"/><path class="zo_drspwk"/><path class="aufr3tbrr"/></g>`,
		"fallback": "uix-sharp:action-marketplace",
	});
}

export default Component;
