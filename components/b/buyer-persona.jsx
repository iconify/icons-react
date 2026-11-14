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
		"content": `<style>.hn7tnnbwb {
  d: path("M2.5 5h19v14h-19Z");
}

.lj7wnvfea {
  d: path("M6 9.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM4 19c.5-3 2-4.5 4-4.5s3.5 1.5 4 4.5m3-9h3.5M15 14h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="lj7wnvfea"/></g>`,
		"fallback": "uix-sharp:buyer-persona",
	});
}

export default Component;
