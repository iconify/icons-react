import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bzehlnbzn {
  d: path("M24 13.866A7.5 7.5 0 0 0 14.5 25H8.75A4.75 4.75 0 0 1 4 20.25V9.5h20zM11.75 12.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM23.5 3A1.5 1.5 0 0 1 25 4.5v2A1.5 1.5 0 0 1 23.5 8h-19A1.5 1.5 0 0 1 3 6.5v-2A1.5 1.5 0 0 1 4.5 3z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.nbzw50bsa {
  d: path("M27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6.5-4a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H21v-3a.5.5 0 0 0-.5-.5");
}
</style><g class="cuyn6tgcc"><path class="nbzw50bsa"/><path class="bzehlnbzn"/></g>`,
		"fallback": "fluent:archive-clock-28-filled",
	});
}

export default Component;
