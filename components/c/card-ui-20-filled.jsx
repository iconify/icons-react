import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b3y6vw8fw {
  fill: currentColor;
  d: path("M2 6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5zM9.5 6h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1m3 2h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1M5 11a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z");
}
</style><path class="b3y6vw8fw"/>`,
		"fallback": "fluent:card-ui-20-filled",
	});
}

export default Component;
