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
		"content": `<style>.av7wgzbuf {
  fill: currentColor;
  d: path("m2.5 13l6-1v7l-6 2Zm13-8l6-2v8l-6-1Z");
}

.is5mhezez {
  d: path("m2.5 5l6-2l7 2l6-2v16l-6 2l-7-2l-6 2Zm6-2v16m7-14v16m-7-8.5l7-1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="is5mhezez"/><path class="av7wgzbuf"/></g>`,
		"fallback": "uix-sharp:chart-choropleth",
	});
}

export default Component;
