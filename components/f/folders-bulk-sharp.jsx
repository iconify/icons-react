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
		"content": `<style>.bnhazmkka {
  d: path("M6 3a1 1 0 0 1 1-1h5c.265 0 .52.105.707.293L14.414 4H21a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V6h-6a1 1 0 0 1-.707-.293L11.586 4H8v1a1 1 0 0 1-2 0Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.tgi7dfolw {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 8c.265 0 .52.105.707.293L10.414 10H17a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z");
}
</style><g class="cuyn6tgcc"><path class="tgi7dfolw"/><path class="bnhazmkka"/></g>`,
		"fallback": "coolicons:folders-bulk-sharp",
	});
}

export default Component;
