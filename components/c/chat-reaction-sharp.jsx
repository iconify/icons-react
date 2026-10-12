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
		"content": `<style>.vgu78uopy {
  d: path("M2.75 6.25v-2.5h18.5v14H12.5L8 20.85l-1.25 1v-4.1h-4v-2.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zr1jdnbzj {
  d: path("m12 13.75l-2.9-2.8A1.9 1.9 0 0 1 12 8.5a1.9 1.9 0 0 1 2.9 2.45Z");
}
</style><g class="x2cwu0gfd"><path class="vgu78uopy"/><path class="zr1jdnbzj"/></g>`,
		"fallback": "iconoven:chat-reaction-sharp",
	});
}

export default Component;
