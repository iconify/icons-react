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
		"content": `<style>.gcifhwhlz {
  d: path("M6 19h11a4 4 0 0 0 0-8a6 6 0 0 0-11.75.75A3.75 3.75 0 0 0 6 19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n1clzq4fw {
  d: path("M9.5 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-1.75 8c0-2 1.75-3.5 3.75-3.5s3.75 1.5 3.75 3.5");
}
</style><g class="hntgybcog"><path class="gcifhwhlz"/><path class="n1clzq4fw"/></g>`,
		"fallback": "uix:cloud-iam",
	});
}

export default Component;
