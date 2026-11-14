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
		"content": `<style>.l25_b03fs {
  fill: currentColor;
  d: path("M12 12V2.5a9.5 9.5 0 0 1 8.25 4.75Z");
}

.u8lpxzb5p {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM12 2.5v19M3.75 7.25l16.5 9.5m0-9.5l-16.5 9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u8lpxzb5p"/><path class="l25_b03fs"/></g>`,
		"fallback": "uix-sharp:colour-wheel-segments",
	});
}

export default Component;
