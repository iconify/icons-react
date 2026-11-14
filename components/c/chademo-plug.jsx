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
		"content": `<style>.s28n22bdt {
  d: path("m13 5.5l-2.5 3h3l-2.5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-e38qips {
  d: path("M4 3h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm5.5 11h5v3h-5Zm2.5 3a4 4 0 0 0 4 4h5");
}
</style><g class="ulnmmdpxh"><path class="z-e38qips"/><path class="s28n22bdt"/></g>`,
		"fallback": "uix-sharp:chademo-plug",
	});
}

export default Component;
