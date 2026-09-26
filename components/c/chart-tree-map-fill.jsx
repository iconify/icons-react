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
		"content": `<style>.fywpxixgh {
  fill: currentColor;
  d: path("M6 2L18 2C20.2091 2 22 3.7909 22 6L22 18C22 20.2091 20.2091 22 18 22L6 22C3.7909 22 2 20.2091 2 18L2 6C2 3.7909 3.7909 2 6 2ZM10 4L10 20L12 20L12 4L10 4ZM12 10L12 12L20 12L20 10L12 10ZM15 12L15 20L17 20L17 12L15 12Z");
}
</style><path class="fywpxixgh"/>`,
		"fallback": "keyline-icons:chart-tree-map-fill",
	});
}

export default Component;
