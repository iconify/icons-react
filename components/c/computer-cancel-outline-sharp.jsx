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
		"content": `<style>.gufpwzb8f {
  fill: currentColor;
  d: path("m9.4 14.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 7.9l-1.4-1.4L12 9.1L9.4 6.5L8 7.9l2.6 2.6L8 13.1zM1 21v-2h22v2zm1-3V3h20v15zm2-2h16V5H4zm0 0V5z");
}
</style><path class="gufpwzb8f"/>`,
		"fallback": "material-symbols:computer-cancel-outline-sharp",
	});
}

export default Component;
