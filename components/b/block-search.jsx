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
		"content": `<style>.fj-offwbh {
  d: path("M3.5 7.25L12 12l8.5-4.75M12 12v3.5m0 3.5v2.5m2.5-4.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm4.75 2l2 2");
}

.ixk48ebiq {
  d: path("M13.112 20.878L12 21.5l-8.5-4.75v-9.5L12 2.5l8.5 4.75v5.463");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ixk48ebiq"/><path class="fj-offwbh"/></g>`,
		"fallback": "uix-sharp:block-search",
	});
}

export default Component;
