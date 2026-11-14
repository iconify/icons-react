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
		"content": `<style>.sa23nmb2h {
  d: path("M3.5 5h17v15.5h-17ZM8 3v4m8-4v4M3.5 10h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydgbn7b1e {
  d: path("M9.25 15.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm2.75-1v1");
}
</style><g class="ulnmmdpxh"><path class="sa23nmb2h"/><path class="ydgbn7b1e"/></g>`,
		"fallback": "uix-sharp:booking-pending",
	});
}

export default Component;
