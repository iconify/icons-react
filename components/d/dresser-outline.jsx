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
		"content": `<style>.loi7qwxog {
  fill: currentColor;
  d: path("M4 21V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v16h-2v-2H6v2zm2-10h5V5H6zm7-4h5V5h-5zm0 4h5V9h-5zm-3 5h4v-2h-4zm-4-3v4h12v-4zm0 0v4z");
}
</style><path class="loi7qwxog"/>`,
		"fallback": "material-symbols:dresser-outline",
	});
}

export default Component;
