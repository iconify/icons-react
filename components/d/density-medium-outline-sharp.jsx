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
		"content": `<style>.egv9hvqtc {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-8v-2h18v2zm0-8V3h18v2z");
}
</style><path class="egv9hvqtc"/>`,
		"fallback": "material-symbols:density-medium-outline-sharp",
	});
}

export default Component;
