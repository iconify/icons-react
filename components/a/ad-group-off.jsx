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
		"content": `<style>.qbjxwpbvh {
  fill: currentColor;
  d: path("M20.5 23.3L15.2 18H8q-.825 0-1.412-.587T6 16V8.8L.7 3.5l1.4-1.4l19.8 19.8zM4 22q-.825 0-1.412-.587T2 20V6h2v14h14v2zm16.7-4.125L8.825 6H20V4H8v1.175L6.125 3.3q.2-.6.713-.95T8 2h12q.825 0 1.413.588T22 4v12q0 .65-.35 1.163t-.95.712");
}
</style><path class="qbjxwpbvh"/>`,
		"fallback": "material-symbols:ad-group-off",
	});
}

export default Component;
