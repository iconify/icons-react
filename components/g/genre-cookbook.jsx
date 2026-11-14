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
		"content": `<style>.a1k8xkabq {
  d: path("M4.5 19A2.5 2.5 0 0 1 7 16.5h12.5M9 5.5v2.25a1.25 1.25 0 0 0 2.5 0V5.5M10.25 9v4.25m3.5-6a1.5 2 0 1 0 3 0a1.5 2 0 1 0-3 0Zm1.5 2v4");
}

.u0twtl96g {
  d: path("M4.5 19V5A2.5 2.5 0 0 1 7 2.5h12.5v19H7A2.5 2.5 0 0 1 4.5 19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u0twtl96g"/><path class="a1k8xkabq"/></g>`,
		"fallback": "uix-sharp:genre-cookbook",
	});
}

export default Component;
