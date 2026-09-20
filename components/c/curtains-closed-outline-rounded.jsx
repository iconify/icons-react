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
		"content": `<style>.vrg0d27nz {
  fill: currentColor;
  d: path("M4 19V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14h1q.425 0 .713.288T22 20t-.288.713T21 21H3q-.425 0-.712-.288T2 20t.288-.712T3 19zm2 0h3V5H6zm5 0h2V5h-2zm4 0h3V5h-3zm-9 0V5zm12 0V5z");
}
</style><path class="vrg0d27nz"/>`,
		"fallback": "material-symbols:curtains-closed-outline-rounded",
	});
}

export default Component;
