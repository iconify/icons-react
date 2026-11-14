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
		"content": `<style>.dabh23b8w {
  fill: currentColor;
  d: path("M12.75 16h4.5v1.5h-4.5Z");
}

.rd4bgob0m {
  d: path("M6.75 16.75h4");
}

.scydveblt {
  fill: currentColor;
  d: path("M7.5 11.75H16v2.5H7.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xu9-eh2oj {
  d: path("M6.5 20a4.5 4.5 0 0 1-1.25-8.75a6.75 6.75 0 0 1 13.25-.5a4.75 4.75 0 0 1-1 9.25Z");
}
</style><g class="ulnmmdpxh"><path class="xu9-eh2oj"/><path class="scydveblt"/><path class="rd4bgob0m"/><path class="dabh23b8w"/></g>`,
		"fallback": "uix-sharp:chart-word-cloud",
	});
}

export default Component;
