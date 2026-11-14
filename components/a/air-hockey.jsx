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
		"content": `<style>.efnx3jbsb {
  d: path("M12 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.h9dmixgnm {
  d: path("M8 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0ZM2.5 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h9dmixgnm"/><path class="efnx3jbsb"/></g>`,
		"fallback": "uix-sharp:air-hockey",
	});
}

export default Component;
