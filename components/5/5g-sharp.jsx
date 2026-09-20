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
		"content": `<style>.pdnt74bqf {
  fill: currentColor;
  d: path("M3.5 16.5v-1h5v-3h-5v-5h6v1h-5v3h5v5zm17-5v5h-8v-9h8v1h-7v7h6v-3H17v-1z");
}
</style><path class="pdnt74bqf"/>`,
		"fallback": "material-symbols-light:5g-sharp",
	});
}

export default Component;
