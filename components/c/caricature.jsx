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
		"content": `<style>.oqv-hdn5g {
  d: path("M12 2.5c5.5 0 8.5 3.5 8.5 8c0 5.5-5 11-8.5 11s-8.5-5.5-8.5-11c0-4.5 3-8 8.5-8Z");
}

.t4c0-gy2m {
  d: path("M6.5 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM12 13.5l-1.75 3h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oqv-hdn5g"/><path class="t4c0-gy2m"/></g>`,
		"fallback": "uix-sharp:caricature",
	});
}

export default Component;
