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
		"content": `<style>.mwzwsbbwb {
  fill: currentColor;
  d: path("M3 21h18v-2h-2V3H5v16H3zm10.288-8.287Q13 12.425 13 12t.288-.712T14 11t.713.288T15 12t-.288.713T14 13t-.712-.288");
}
</style><path class="mwzwsbbwb"/>`,
		"fallback": "material-symbols:door-front-sharp",
	});
}

export default Component;
