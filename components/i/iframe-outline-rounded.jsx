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
		"content": `<style>.pg1hbdb2y {
  fill: currentColor;
  d: path("M11.5 13.5h5v-2h-5zM11 15q-.425 0-.712-.288T10 14v-3q0-.425.288-.712T11 10h6q.425 0 .713.288T18 11v3q0 .425-.288.713T17 15zm-7 5q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V8H4z");
}
</style><path class="pg1hbdb2y"/>`,
		"fallback": "material-symbols:iframe-outline-rounded",
	});
}

export default Component;
