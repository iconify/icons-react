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
		"content": `<style>.bd3ces-5t {
  d: path("M12.5 6H18v3h-5.5Zm-3 6l-1 3.5");
}

.rdxjhmbhz {
  d: path("M2.5 3h16A2.5 2.5 0 0 1 21 5.5v4a2.5 2.5 0 0 1-2.5 2.5H16l1.5 7.5a1.5 1.5 0 0 1-1.5 2h-2.5a1.5 1.5 0 0 1-1.5-1.25L10.5 12l-8-2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rdxjhmbhz"/><path class="bd3ces-5t"/></g>`,
		"fallback": "uix-sharp:courier-handheld",
	});
}

export default Component;
