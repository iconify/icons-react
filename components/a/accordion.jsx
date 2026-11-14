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
		"content": `<style>.ga8xxqb2l {
  d: path("m15.5 5.25l1.5 1.5l1.5-1.5m-3 9.75l1.5-1.5l1.5 1.5M5 20.25h10");
}

.ndnygt_up {
  d: path("M2.5 3.25h19v5.5h-19Zm0 8.25h19V17h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ndnygt_up"/><path class="ga8xxqb2l"/></g>`,
		"fallback": "uix-sharp:accordion",
	});
}

export default Component;
