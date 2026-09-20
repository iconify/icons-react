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
		"content": `<style>.m8lalnbkd {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v9h-2V4H6v16h7v2H6Zm9 0v-7h5v7h-5Zm-3-10Z");
}
</style><path class="m8lalnbkd"/>`,
		"fallback": "material-symbols:float-portrait-outline",
	});
}

export default Component;
