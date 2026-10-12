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
		"content": `<style>.aaghl-ova {
  d: path("M8.75 21.25V2.75h12.5v18.5m-12.5 0h12.5m-18 0h5.5v-4.5l-.4.3l-5.2 3.9l-.4.3z");
}

.n9l5kfbfl {
  d: path("M12 12h5m-2-2l2 2l-2 2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="aaghl-ova"/><path class="n9l5kfbfl"/></g>`,
		"fallback": "iconoven:accessible-entrance-sharp",
	});
}

export default Component;
