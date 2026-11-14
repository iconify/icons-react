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
		"content": `<style>.iurei9sps {
  d: path("M9.75 6L16 10l-6.25 4ZM8.5 20.5h7");
}

.n-ql5abmv {
  d: path("M2.5 3h19v14h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n-ql5abmv"/><path class="iurei9sps"/></g>`,
		"fallback": "uix-sharp:help-video",
	});
}

export default Component;
