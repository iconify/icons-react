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
		"content": `<style>.caaa9kgvp {
  d: path("M11 8.5h2v2l1.5 2V18h-5v-5.5l1.5-2Z");
}

.fr7h0jopz {
  d: path("M3.5 5.5h17m-11 0v-2h5v2M5 5.5L6.5 21h11L19 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fr7h0jopz"/><path class="caaa9kgvp"/></g>`,
		"fallback": "uix-sharp:bin-plastic",
	});
}

export default Component;
