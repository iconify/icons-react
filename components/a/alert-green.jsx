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
		"content": `<style>.bc--asbvk {
  d: path("M10.5 6.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 5.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.jedk3ob4y {
  fill: currentColor;
  d: path("M10.25 17.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.l_183db8r {
  d: path("M8 2.5h8a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l_183db8r"/><path class="bc--asbvk"/><path class="jedk3ob4y"/></g>`,
		"fallback": "uix-sharp:alert-green",
	});
}

export default Component;
