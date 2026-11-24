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
		"content": `<style>.z55qg0bll {
  fill: currentColor;
  d: path("M4 12a8 8 0 0 1 8-8h7a1 1 0 0 1 0 2h-7a6 6 0 0 0-6 6v7a1 1 0 0 1-2 0Z");
}
</style><path class="z55qg0bll"/>`,
		"fallback": "coolicons:corner-regular-bulk",
	});
}

export default Component;
