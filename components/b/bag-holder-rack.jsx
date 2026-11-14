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
		"content": `<style>.n2p2kgbpx {
  d: path("M2.5 6h19m-17 5.5h15l1 10h-17Z");
}

.o21ze4zyd {
  d: path("M5.5 11.5V6A2.25 2.25 0 0 1 10 6v5.5m4 0V6a2.25 2.25 0 0 1 4.5 0v5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n2p2kgbpx"/><path class="o21ze4zyd"/></g>`,
		"fallback": "uix-sharp:bag-holder-rack",
	});
}

export default Component;
