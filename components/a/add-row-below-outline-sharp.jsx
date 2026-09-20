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
		"content": `<style>.sylkw0bey {
  fill: currentColor;
  d: path("M5 10.558h14V4H5zM4 19V3h16v16h-3.116v-1H19v-6.442H5V18h2.116v1zm8-8.442v1zM11.5 21v-2h-2v-1h2v-2h1v2h2v1h-2v2z");
}
</style><path class="sylkw0bey"/>`,
		"fallback": "material-symbols-light:add-row-below-outline-sharp",
	});
}

export default Component;
