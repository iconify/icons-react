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
		"content": `<style>.abi02fbuk {
  d: path("M15.75 5.505A7.5 7.5 0 0 1 12 19.5");
}

.mr0bswbng {
  d: path("M9.75 2.25L12 4.5L9.75 6.75m0 5.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ryrw1s4gg {
  d: path("M14.25 17.25L12 19.5l2.25 2.25m-6-3.255A7.5 7.5 0 0 1 12 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="abi02fbuk"/><path class="ryrw1s4gg"/><path class="mr0bswbng"/></g>`,
		"fallback": "uix-sharp:continuous-integration",
	});
}

export default Component;
