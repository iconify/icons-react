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
		"content": `<style>.cnib-t67u {
  d: path("M12 17c-1.5 0-2 2.5-2 4.5h4c0-2-.5-4.5-2-4.5Z");
}

.jh--vwb6r {
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.kb8o71fvl {
  d: path("M8.5 4.5a3.5 2.5 0 1 0 7 0a3.5 2.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kb8o71fvl"/><path class="jh--vwb6r"/><path class="cnib-t67u"/></g>`,
		"fallback": "uix-sharp:bag-charm",
	});
}

export default Component;
