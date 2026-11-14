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
		"content": `<style>.lvjes1b8h {
  d: path("M7 7.5h10v9H7ZM2.5 7H7v10H2.5ZM17 7h4.5v10H17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wkssh-j0u {
  d: path("m7 12l1.75-1.5l1.75 3m3-3l1.75 3L17 12");
}
</style><g class="ulnmmdpxh"><path class="lvjes1b8h"/><path class="wkssh-j0u"/></g>`,
		"fallback": "uix-sharp:fuse-blown",
	});
}

export default Component;
