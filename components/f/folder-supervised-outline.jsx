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
		"content": `<style>.arh4nxu5t {
  fill: currentColor;
  d: path("M4 18V6v4.3v-.3zm0 2q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v3.275q-.45-.325-.95-.562T20 10.3V8h-8.825l-2-2H4v12h7.075q.075.525.238 1.025T11.7 20zm10 0v-.55q0-1.125 1.1-1.787T18 17t2.9.663T22 19.45V20zm2.588-4.587Q16 14.825 16 14t.588-1.412T18 12t1.413.588T20 14t-.587 1.413T18 16t-1.412-.587");
}
</style><path class="arh4nxu5t"/>`,
		"fallback": "material-symbols:folder-supervised-outline",
	});
}

export default Component;
