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
		"content": `<style>.n_ga50b6a {
  d: path("M8 21.5v-4h3v4m7.75-4v4m0-7h.01");
}

.q4-dod0ry {
  d: path("M3.5 2.5h12v19h-12Zm2.75 4h2m2.5 0h2m-6.5 4h2m2.5 0h2m-6.5 4h2m2.5 0h2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q4-dod0ry"/><path class="n_ga50b6a"/></g>`,
		"fallback": "uix-sharp:company-info",
	});
}

export default Component;
