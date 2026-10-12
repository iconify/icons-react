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
		"content": `<style>.vvmfwoefr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 6C2 3.7909 3.7909 2 6 2L18 2C20.2091 2 22 3.7909 22 6L22 18C22 20.2091 20.2091 22 18 22L6 22C3.7909 22 2 20.2091 2 18L2 6ZM4 11L4 13L14 13L14 20L16 20L16 13L20 13L20 11L10 11L10 4L8 4L8 11L4 11Z");
}
</style><path clip-rule="evenodd" class="vvmfwoefr"/>`,
		"fallback": "keyline-icons:grid-masonry-fill",
	});
}

export default Component;
