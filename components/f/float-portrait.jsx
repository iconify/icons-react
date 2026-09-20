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
		"content": `<style>.on5iiabgj {
  fill: currentColor;
  d: path("M15 22v-7h5v7h-5Zm-9 0q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v9h-7v9H6Z");
}
</style><path class="on5iiabgj"/>`,
		"fallback": "material-symbols:float-portrait",
	});
}

export default Component;
