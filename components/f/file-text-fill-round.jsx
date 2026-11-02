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
		"content": `<style>.id7o3weik {
  fill: currentColor;
  d: path("M19.707 8.293A1 1 0 0 1 20 9v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 22H9a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h4c.265 0 .52.105.707.293ZM13 7a2 2 0 0 0 2 2h3l-5-5Zm-4 5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm6 4H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="id7o3weik"/>`,
		"fallback": "coolicons:file-text-fill-round",
	});
}

export default Component;
