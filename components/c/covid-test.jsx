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
		"content": `<style>.l_183db8r {
  d: path("M8 2.5h8a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z");
}

.p4c5g5etu {
  d: path("M10 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.25-9.75h4.5m-4.5 3.5h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l_183db8r"/><path class="p4c5g5etu"/></g>`,
		"fallback": "uix-sharp:covid-test",
	});
}

export default Component;
