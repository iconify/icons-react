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
		"content": `<style>.ggad81b1e {
  d: path("M12 2.75a5 5 0 0 1 5 5v2.5l3.25 1.114v9.886H3.75v-9.886L7 10.25v-2.5a5 5 0 0 1 5-5Z");
}

.wg-bwjbic {
  d: path("M10 6.25h4v3h-4zm2 7.5v6M6.75 17.5v2.25m10.5-2.25v2.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ggad81b1e"/><path class="wg-bwjbic"/></g>`,
		"fallback": "iconoven:hazmat-suit-sharp",
	});
}

export default Component;
