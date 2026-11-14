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
		"content": `<style>.fx0lhxetn {
  d: path("M8.5 6.5L13 9l-4.5 2.5Zm4.5 8a1.5 1.5 0 0 1 1.5-1.5H20a1.5 1.5 0 0 1 1.5 1.5V18a1.5 1.5 0 0 1-1.5 1.5h-3l-2.5 2v-2A1.5 1.5 0 0 1 13 18Z");
}

.red50_bch {
  d: path("M10.2 15H2.5V3h16v7.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="red50_bch"/><path class="fx0lhxetn"/></g>`,
		"fallback": "uix-sharp:audio-description-film",
	});
}

export default Component;
