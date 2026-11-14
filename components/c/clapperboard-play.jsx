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
		"content": `<style>.b0cx3ez_c {
  d: path("M3 7.5h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm0 0V5a1.5 1.5 0 0 1 1.5-1.5h15A1.5 1.5 0 0 1 21 5v2.5m-11-4l-2 4m8-4l-2 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yfkhz6oqq {
  d: path("M10 10.75L15 14l-5 3.25Z");
}
</style><g class="ulnmmdpxh"><path class="b0cx3ez_c"/><path class="yfkhz6oqq"/></g>`,
		"fallback": "uix-sharp:clapperboard-play",
	});
}

export default Component;
