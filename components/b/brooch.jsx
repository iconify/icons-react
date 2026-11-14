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
		"content": `<style>.a8tu9rbfm {
  d: path("m12 8.5l4.25 3.5L12 17.75L7.75 12ZM7.75 12h8.5");
}

.qfbzcnnte {
  d: path("m10 12l2-3.5l2 3.5");
}

.u-78dgbat {
  d: path("M3.5 12.5a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0ZM3 4h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u-78dgbat"/><path class="a8tu9rbfm"/><path class="qfbzcnnte"/></g>`,
		"fallback": "uix-sharp:brooch",
	});
}

export default Component;
