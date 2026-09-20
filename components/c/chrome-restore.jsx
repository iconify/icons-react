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
		"content": `<style>.zibj73l9r {
  fill: currentColor;
  d: path("M10 16q-.825 0-1.413-.588T8 14V6q0-.825.588-1.413T10 4h8q.825 0 1.413.588T20 6v8q0 .825-.588 1.413T18 16h-8Zm-4 4q-.825 0-1.413-.588T4 18V8.525h2V18h9.475v2H6Z");
}
</style><path class="zibj73l9r"/>`,
		"fallback": "material-symbols:chrome-restore",
	});
}

export default Component;
