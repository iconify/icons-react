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
		"content": `<style>.g9oe66fjc {
  d: path("M13.692 20.812L12 21l-6.5-2l-2-6L3 6.5L9 3l6 2l5.5-1.5l.5 6.5l-.565 1.507");
}

.hecwcac_j {
  d: path("M18 21.75c-2-2.25-3-3.75-3-5a3 3 0 0 1 6 0c0 1.25-1 2.75-3 5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g9oe66fjc"/><path class="hecwcac_j"/></g>`,
		"fallback": "uix-sharp:county",
	});
}

export default Component;
