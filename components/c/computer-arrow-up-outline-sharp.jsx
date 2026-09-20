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
		"content": `<style>.kdbacgj7c {
  fill: currentColor;
  d: path("M11 14.5h2v-4.175l1.6 1.575l1.4-1.4l-4-4l-4 4l1.4 1.425l1.6-1.6zM1 21v-2h22v2zm1-3V3h20v15zm2-2h16V5H4zm0 0V5z");
}
</style><path class="kdbacgj7c"/>`,
		"fallback": "material-symbols:computer-arrow-up-outline-sharp",
	});
}

export default Component;
