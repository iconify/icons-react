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
		"content": `<style>.mslpx_7ni {
  fill: currentColor;
  d: path("M6.5 2A2.5 2.5 0 0 0 4 4.5v1A2.5 2.5 0 0 0 6.5 8h11A2.5 2.5 0 0 0 20 5.5v-1A2.5 2.5 0 0 0 17.5 2zm0 7A2.5 2.5 0 0 0 4 11.5v1A2.5 2.5 0 0 0 6.5 15h11a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 17.5 9zm0 7A2.5 2.5 0 0 0 4 18.5v1A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-2.5-2.5z");
}
</style><path class="mslpx_7ni"/>`,
		"fallback": "fluent:align-space-evenly-vertical-24-filled",
	});
}

export default Component;
