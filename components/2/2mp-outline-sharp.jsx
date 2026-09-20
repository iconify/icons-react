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
		"content": `<style>.ev-p4pbem {
  fill: currentColor;
  d: path("M6 18.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6zm3.75-7h4.5V10h-3V9h3V5.5h-4.5V7h3v1h-3zm3.75 7H15V17h3v-4.5h-4.5zm1.5-3V14h1.5v1.5zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="ev-p4pbem"/>`,
		"fallback": "material-symbols:2mp-outline-sharp",
	});
}

export default Component;
