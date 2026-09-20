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
		"content": `<style>.e66204dyf {
  fill: currentColor;
  d: path("m6 21l6-6l6 6zm-4-2V3h20v16h-5v-2h3V5H4v12h3v2zm10-7");
}
</style><path class="e66204dyf"/>`,
		"fallback": "material-symbols:airplay-outline-sharp",
	});
}

export default Component;
