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
		"content": `<style>.tfo2jdbyw {
  fill: currentColor;
  d: path("M8 22V9H7V6h1V2h8v4h1v3h-1v13z");
}
</style><path class="tfo2jdbyw"/>`,
		"fallback": "material-symbols:device-band-sharp",
	});
}

export default Component;
