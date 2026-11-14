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
		"content": `<style>.eg9sy5n4o {
  d: path("M8.5 18.5v-3a3.5 3.5 0 0 1 7 0v3");
}

.mlhqxpbrs {
  d: path("M2.5 18.5C4 8.5 9 5.5 12 5.5s8 3 9.5 13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mlhqxpbrs"/><path class="eg9sy5n4o"/></g>`,
		"fallback": "uix-sharp:den",
	});
}

export default Component;
