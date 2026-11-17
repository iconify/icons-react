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
		"content": `<style>.jjjbmccon {
  fill: currentColor;
  d: path("M18 4c.265 0 .52.105.707.293A9.483 9.483 0 0 1 12 20.485A9.482 9.482 0 0 1 5.293 4.293A1 1 0 0 1 6 4ZM8 8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm4 0a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm4.01 0H16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M10 13a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm4.01 0H14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="jjjbmccon"/>`,
		"fallback": "coolicons:ev-plug-fill-sharp",
	});
}

export default Component;
