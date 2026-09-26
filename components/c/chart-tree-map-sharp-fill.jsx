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
		"content": `<style>.zmynbzbcg {
  fill: currentColor;
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM10 4L10 20L12 20L12 4L10 4ZM12 10L12 12L20 12L20 10L12 10ZM15 12L15 20L17 20L17 12L15 12Z");
}
</style><path class="zmynbzbcg"/>`,
		"fallback": "keyline-icons:chart-tree-map-sharp-fill",
	});
}

export default Component;
