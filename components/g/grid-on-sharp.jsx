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
		"content": `<style>.ky2-3xbwe {
  fill: currentColor;
  d: path("M3 21h4.675v-4.675H3zm6.675 0h4.65v-4.675h-4.65zm6.65 0H21v-4.675h-4.675zM3 14.325h4.675v-4.65H3zm6.675 0h4.65v-4.65h-4.65zm6.65 0H21v-4.65h-4.675zM3 7.675h4.675V3H3zm6.675 0h4.65V3h-4.65zm6.65 0H21V3h-4.675z");
}
</style><path class="ky2-3xbwe"/>`,
		"fallback": "material-symbols:grid-on-sharp",
	});
}

export default Component;
