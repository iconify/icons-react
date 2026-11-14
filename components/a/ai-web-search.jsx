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
		"content": `<style>.qkii7vicd {
  d: path("M7.5 10.5a3 7 0 1 0 6 0a3 7 0 1 0-6 0Zm-4 0h14m-2 5l5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z81slaclh {
  d: path("M3.5 10.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}
</style><g class="ulnmmdpxh"><path class="z81slaclh"/><path class="qkii7vicd"/></g>`,
		"fallback": "uix-sharp:ai-web-search",
	});
}

export default Component;
