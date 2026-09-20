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
		"content": `<style>.xwhdhqugn {
  fill: currentColor;
  d: path("M7 22V6h3v16zm7-6V6h3v10zM2 4V2h20v2z");
}
</style><path class="xwhdhqugn"/>`,
		"fallback": "material-symbols:align-vertical-top",
	});
}

export default Component;
