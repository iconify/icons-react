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
		"content": `<style>.p5orp9ctt {
  d: path("M6.5 15q2.75-1.75 5.5 0t5.5 0");
}

.u0sejybgi {
  d: path("M2.5 8.5h19V21h-19Zm2-4h6v4h-6Zm8.5 4v-4a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u0sejybgi"/><path class="p5orp9ctt"/></g>`,
		"fallback": "uix-sharp:fighter-water-jug",
	});
}

export default Component;
