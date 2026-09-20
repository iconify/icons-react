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
		"content": `<style>.mckeoksds {
  fill: currentColor;
  d: path("M6 10h6V5H6zM4 21V3h10v9h3v7.5h2.25V9H18V6h.5V4.5h1V6h1V4.5h1V6h.5v3h-1.25v12H15.5v-7.5H14V21zm4.5-2l2.5-4H9.5v-3L7 16h1.5z");
}
</style><path class="mckeoksds"/>`,
		"fallback": "material-symbols:ev-charger-sharp",
	});
}

export default Component;
