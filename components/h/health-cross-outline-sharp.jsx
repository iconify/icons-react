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
		"content": `<style>.ukqf22deb {
  fill: currentColor;
  d: path("M8 21v-5H3V8h5V3h8v5h5v8h-5v5zm2-2h4v-5h5v-4h-5V5h-4v5H5v4h5zm2-7");
}
</style><path class="ukqf22deb"/>`,
		"fallback": "material-symbols:health-cross-outline-sharp",
	});
}

export default Component;
