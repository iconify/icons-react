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
		"content": `<style>.osgsu5b9x {
  d: path("M12 12V5.5a6.5 6.5 0 0 1 6.5 6.5Zm0 0v5a5 5 0 0 1-5-5Zm0 0h3.5a3.5 3.5 0 0 1-3.5 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="osgsu5b9x"/></g>`,
		"fallback": "uix-sharp:chart-polar",
	});
}

export default Component;
