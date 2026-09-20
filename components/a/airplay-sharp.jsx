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
		"content": `<style>.otgwc7mka {
  fill: currentColor;
  d: path("m6 21l6-6l6 6zm-4-2V3h20v16h-3l-7-7l-7 7z");
}
</style><path class="otgwc7mka"/>`,
		"fallback": "material-symbols:airplay-sharp",
	});
}

export default Component;
