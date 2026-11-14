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
		"content": `<style>.jct3fj_gk {
  d: path("M8.5 16h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3.25");
}

.rga15fqhl {
  d: path("M11.25 11H21.5v9.5H11.25ZM2.5 7h15M15 14.25l3 3m0-3l-3 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jct3fj_gk"/><path class="rga15fqhl"/></g>`,
		"fallback": "uix-sharp:adware",
	});
}

export default Component;
