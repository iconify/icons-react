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
		"content": `<style>.audwk_b3u {
  fill: currentColor;
  d: path("M9 12.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.lni3wcb-p {
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-6.5 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm13 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM12 6.5v3m-2.25 5L7 17.25m7.25-2.75L17 17.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="audwk_b3u"/><path class="lni3wcb-p"/></g>`,
		"fallback": "uix-sharp:content-cluster",
	});
}

export default Component;
