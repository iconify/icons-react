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
		"content": `<style>.ew9azobco {
  fill: currentColor;
  d: path("M14.5 16.5h4v-4h-1v3h-3zm-9-5h1v-3h3v-1h-4zM4.615 19q-.69 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z");
}
</style><path class="ew9azobco"/>`,
		"fallback": "material-symbols-light:aspect-ratio",
	});
}

export default Component;
