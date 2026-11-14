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
		"content": `<style>.e8zvlhupv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 2.5h5.5V12h-5.5ZM12 12v3.5m-5.5 6v-2a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4v2Zm5.5-16v2");
}
</style><path class="e8zvlhupv"/>`,
		"fallback": "uix-sharp:immersion-blender",
	});
}

export default Component;
