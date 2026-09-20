import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zjps_t9lz {
  fill: currentColor;
  d: path("M12.25 13.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5zm2-4.25a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5zm2-4.25a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="zjps_t9lz"/>`,
		"fallback": "fluent:filter-20-filled",
	});
}

export default Component;
