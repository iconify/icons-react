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
		"content": `<style>.s53rz2b8m {
  fill: currentColor;
  d: path("m7.825 10l2.9 2.9q.3.3.288.7t-.288.7q-.3.3-.7.313t-.7-.288L4.7 9.7q-.15-.15-.213-.325T4.426 9t.063-.375T4.7 8.3l4.575-4.575q.3-.3.713-.3t.712.3t.3.7t-.3.7L7.825 8H17q.825 0 1.413.588T19 10v9q0 .425-.288.713T18 20t-.712-.288T17 19v-9z");
}
</style><path class="s53rz2b8m"/>`,
		"fallback": "material-symbols:arrow-top-left-outline-rounded",
	});
}

export default Component;
