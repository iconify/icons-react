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
		"content": `<style>.h1333kbrj {
  fill: currentColor;
  d: path("M2.25 11a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm3-1.75a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm3-5.25a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm3-8.75a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm3-8.75a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm3-5.25a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm3-1.75a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Z");
}

.sukohubkj {
  d: path("M2.5 20.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sukohubkj"/><path class="h1333kbrj"/></g>`,
		"fallback": "uix-sharp:chart-beeswarm",
	});
}

export default Component;
