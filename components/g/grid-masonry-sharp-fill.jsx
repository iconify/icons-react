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
		"content": `<style>.bapy76b4c {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM4 11L4 13L14 13L14 20L16 20L16 13L20 13L20 11L10 11L10 4L8 4L8 11L4 11Z");
}
</style><path clip-rule="evenodd" class="bapy76b4c"/>`,
		"fallback": "keyline-icons:grid-masonry-sharp-fill",
	});
}

export default Component;
