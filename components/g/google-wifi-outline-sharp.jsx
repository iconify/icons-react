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
		"content": `<style>.rv7mdm0jh {
  fill: currentColor;
  d: path("M4.6 10h14.8l-.275-4H4.875zm-.125 2l-.325 5h15.7l-.325-5zM5 20l-.325-1H2L3 4h18l1 15h-2.675L19 20z");
}
</style><path class="rv7mdm0jh"/>`,
		"fallback": "material-symbols:google-wifi-outline-sharp",
	});
}

export default Component;
