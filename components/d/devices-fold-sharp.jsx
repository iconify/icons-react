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
		"content": `<style>.s44sldphn {
  fill: currentColor;
  d: path("M10 21V2.975l7-3.05V3h5v18zm4.675-2H20V5h-3v13.025zM2 5V3h2v2zm0 16v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm4-4V3h2v2zm0 16v-2h2v2z");
}
</style><path class="s44sldphn"/>`,
		"fallback": "material-symbols:devices-fold-sharp",
	});
}

export default Component;
