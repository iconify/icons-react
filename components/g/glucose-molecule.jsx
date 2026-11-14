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
		"content": `<style>.nctsjgjcf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 8.5l5.25 3v6l-5.25 3l-5.25-3v-6Zm0 0V5.75M10.25 4a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-3.5 13.5h.01");
}
</style><path class="nctsjgjcf"/>`,
		"fallback": "uix-sharp:glucose-molecule",
	});
}

export default Component;
