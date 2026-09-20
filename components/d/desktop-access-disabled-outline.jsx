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
		"content": `<style>.k3n-vs_4n {
  fill: currentColor;
  d: path("M3.175 3.175L5 5H4v11h9.2L.7 3.5l1.4-1.4l19.8 19.8l-1.4 1.4l-5.3-5.3H14v2h2v2H8v-2h2v-2H4q-.825 0-1.412-.587T2 16V5q0-.925.588-1.375zM20.7 17.85L18.85 16H20V5H7.85l-2-2H20q.825 0 1.413.588T22 5v11q0 .65-.363 1.15t-.937.7M8.6 11.4");
}
</style><path class="k3n-vs_4n"/>`,
		"fallback": "material-symbols:desktop-access-disabled-outline",
	});
}

export default Component;
