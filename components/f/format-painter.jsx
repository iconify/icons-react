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
		"content": `<style>.ivw2gca1t {
  d: path("M3.5 3h13v6h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wqvvlw7mc {
  d: path("M16.5 6H19a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 0-1 1v1.5m-1.5 0h3V21h-3Z");
}
</style><g class="ulnmmdpxh"><path class="ivw2gca1t"/><path class="wqvvlw7mc"/></g>`,
		"fallback": "uix-sharp:format-painter",
	});
}

export default Component;
