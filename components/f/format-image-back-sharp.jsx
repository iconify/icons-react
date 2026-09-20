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
		"content": `<style>.rbu1gjb8o {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-4v-2h4v-2H3v-2h4V9H3V7h18v2h-4v2h4v2h-4v2h4v2zM3 5V3h18v2z");
}
</style><path class="rbu1gjb8o"/>`,
		"fallback": "material-symbols:format-image-back-sharp",
	});
}

export default Component;
