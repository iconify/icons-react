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
		"content": `<style>.ad2mysmrc {
  d: path("M15 14.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM9.75 9.75l4.5 4.5M2.5 6.5v-4h4m11 0h4v4m0 11v4h-4m-11 0h-4v-4");
}

.dl3qp0c1c {
  d: path("M8.25 7.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5 8.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.s_izh3b0p {
  d: path("M6.5 9.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s_izh3b0p"/><path class="dl3qp0c1c"/><path class="ad2mysmrc"/></g>`,
		"fallback": "uix-sharp:bone-scan",
	});
}

export default Component;
