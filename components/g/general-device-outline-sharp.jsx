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
		"content": `<style>.cr205w_yt {
  fill: currentColor;
  d: path("M8 18V3h8v15zm2-2h4V5h-4zm-2 5v-2h8v2zm2-5h4z");
}
</style><path class="cr205w_yt"/>`,
		"fallback": "material-symbols:general-device-outline-sharp",
	});
}

export default Component;
