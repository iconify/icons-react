import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d28naib1f {
  fill: currentColor;
  d: path("M20 80V64a20 20 0 0 1 20-20h53.33a20.12 20.12 0 0 1 12 4l29.87 22.4a12 12 0 1 1-14.4 19.2L92 68H44v12a12 12 0 0 1-24 0m68 116H44v-4a12 12 0 0 0-24 0v8.62A19.41 19.41 0 0 0 39.38 220H88a12 12 0 0 0 0-24m72 0h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m64-56a12 12 0 0 0-12 12v44h-12a12 12 0 0 0 0 24h16.89A19.13 19.13 0 0 0 236 200.89V152a12 12 0 0 0-12-12m-8-72h-48a12 12 0 0 0 0 24h44v20a12 12 0 0 0 24 0V88a20 20 0 0 0-20-20M32 164a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12");
}
</style><path class="d28naib1f"/>`,
		"fallback": "ph:folder-simple-dashed-bold",
	});
}

export default Component;
