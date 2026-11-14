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
		"content": `<style>.kyhg65ggd {
  d: path("M9 9h12v12H9Z");
}

.tj67z-bgg {
  fill: currentColor;
  d: path("M3 3h10v10H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zmkdfnmhj {
  d: path("M14.5 16.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="tj67z-bgg"/><path class="kyhg65ggd"/><path class="zmkdfnmhj"/></g>`,
		"fallback": "uix-sharp:contrast-check",
	});
}

export default Component;
