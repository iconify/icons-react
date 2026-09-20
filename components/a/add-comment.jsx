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
		"content": `<style>.bjuhs48_x {
  fill: currentColor;
  d: path("M11.5 13.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3zM3 20.077V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616v10.769q0 .69-.463 1.153T19.385 17H6.077z");
}
</style><path class="bjuhs48_x"/>`,
		"fallback": "material-symbols-light:add-comment",
	});
}

export default Component;
