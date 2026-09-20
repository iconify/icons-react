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
		"content": `<style>.oq3xudbyb {
  fill: currentColor;
  d: path("M8 18h8V6H8zm12 2q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4z");
}
</style><path class="oq3xudbyb"/>`,
		"fallback": "material-symbols:fullscreen-portrait",
	});
}

export default Component;
