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
		"content": `<style>.bf0-kmbjy {
  d: path("M15 15V8.5h3V18M16.5 6.25c-1-.75-.75-2 .25-2.25s1.25-1.25.5-2");
}

.uk5d-tzao {
  d: path("M2.5 21.5L12 12l9.5 9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uk5d-tzao"/><path class="bf0-kmbjy"/></g>`,
		"fallback": "uix-sharp:chimney",
	});
}

export default Component;
