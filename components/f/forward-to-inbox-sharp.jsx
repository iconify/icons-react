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
		"content": `<style>.ed1d92u4x {
  fill: currentColor;
  d: path("m19 23l-1.4-1.4l1.575-1.6H15v-2h4.175l-1.6-1.6L19 15l4 4zM2 20V4h20v9.8q-.675-.4-1.437-.6T19 13q-2.5 0-4.25 1.75T13 19v1zm10-7l8-5V6l-8 5l-8-5v2z");
}
</style><path class="ed1d92u4x"/>`,
		"fallback": "material-symbols:forward-to-inbox-sharp",
	});
}

export default Component;
