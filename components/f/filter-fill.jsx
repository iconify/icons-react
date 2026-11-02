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
		"content": `<style>.czp0lcsor {
  fill: currentColor;
  d: path("M19 3a2 2 0 0 1 2 2v1c0 .265-.105.52-.293.707L15 12.414V18a1 1 0 0 1-.553.894l-4 2A1 1 0 0 1 9 20v-7.586L3.293 6.707A1 1 0 0 1 3 6V5a2 2 0 0 1 2-2Z");
}
</style><path class="czp0lcsor"/>`,
		"fallback": "coolicons:filter-fill",
	});
}

export default Component;
