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
		"content": `<style>.h50fvwbzn {
  fill: currentColor;
  d: path("M13 10.5h1v-2h2v-1h-2v-2h-1v2h-2v1h2zm-2 4h5v-1h-5zM8.616 18q-.691 0-1.153-.462T7 16.384V3.616q0-.691.463-1.153T8.616 2H15.5L20 6.5v9.885q0 .69-.462 1.153T18.384 18zm-4 4q-.691 0-1.153-.462T3 20.385V8h1v12.385q0 .23.192.423t.423.192H14v1z");
}
</style><path class="h50fvwbzn"/>`,
		"fallback": "material-symbols-light:difference",
	});
}

export default Component;
