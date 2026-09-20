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
		"content": `<style>.e8_9kccng {
  fill: currentColor;
  d: path("M4 15h16v-2H4zm4 7v-5H2V2h20v15h-6v5l-4-2zM4 10h16V4H4zm0 5V4z");
}
</style><path class="e8_9kccng"/>`,
		"fallback": "material-symbols:card-membership-outline-sharp",
	});
}

export default Component;
