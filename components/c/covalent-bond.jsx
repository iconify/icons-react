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
		"content": `<style>.kblyrccku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m12 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-2-1.5h.01m-.01 3h.01M6 12h.01M18 12h.01");
}
</style><path class="kblyrccku"/>`,
		"fallback": "uix:covalent-bond",
	});
}

export default Component;
