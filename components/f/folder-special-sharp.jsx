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
		"content": `<style>.giuiymb1c {
  fill: currentColor;
  d: path("m12.6 16.7l2.3-1.75l2.3 1.75l-.85-2.85l2.3-1.85H15.8l-.9-2.8L14 12h-2.85l2.3 1.85zM2 20V4h8l2 2h10v14z");
}
</style><path class="giuiymb1c"/>`,
		"fallback": "material-symbols:folder-special-sharp",
	});
}

export default Component;
