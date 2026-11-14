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
		"content": `<style>.cz4bulbdf {
  d: path("M3.5 8V6A2.5 2.5 0 0 1 6 3.5h2m8 0h2A2.5 2.5 0 0 1 20.5 6v2m0 8v2a2.5 2.5 0 0 1-2.5 2.5h-2m-8 0H6A2.5 2.5 0 0 1 3.5 18v-2m6.25 1.75V16c-1.5-1-2.25-2.5-2.25-4.25C7.5 9 9.5 7 12.25 7c2.5 0 4.25 1.75 4.25 4.25l.75 1.75l-.75.25v1.25c0 .75-.5 1.25-1.25 1.25h-1v2");
}

.es7q9r3ig {
  d: path("M2.5 12h2.25m14.5 0h2.25");
}

.nfv18zbbp {
  fill: currentColor;
  d: path("M9.5 10.75a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cz4bulbdf"/><path class="nfv18zbbp"/><path class="es7q9r3ig"/></g>`,
		"fallback": "uix-sharp:brain-scan",
	});
}

export default Component;
