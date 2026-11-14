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
		"content": `<style>.mhuvow97a {
  d: path("M2.5 5.5h19v13h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zvp3h1b-p {
  d: path("M6 11.5V9h2.5m9.5 3.5V15h-2.5");
}
</style><g class="ulnmmdpxh"><path class="mhuvow97a"/><path class="zvp3h1b-p"/></g>`,
		"fallback": "uix-sharp:aspect-ratio",
	});
}

export default Component;
