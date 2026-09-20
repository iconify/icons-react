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
		"content": `<style>.n0a6rpb_d {
  fill: currentColor;
  d: path("M8 21v-1l2-2H2V3h20v15h-8l2 2v1zm-4-8h16V5H4zm0 0V5z");
}
</style><path class="n0a6rpb_d"/>`,
		"fallback": "material-symbols:desktop-mac-outline-sharp",
	});
}

export default Component;
