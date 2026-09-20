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
		"content": `<style>.aq2co8zdg {
  fill: currentColor;
  d: path("M6 12h2v-2H6zm4 0h2v-2h-2zm4 4h2v-2h-2zm0-4h2v-2h-2zM2 20V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="aq2co8zdg"/>`,
		"fallback": "material-symbols:image-aspect-ratio-outline-sharp",
	});
}

export default Component;
