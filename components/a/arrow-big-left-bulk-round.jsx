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
		"content": `<style>.wosu6bw4y {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 11v2a3 3 0 0 1-3 3h-4a.997.997 0 0 0-1 1v1c0 .898-.572 1.928-1.521 2.089a1.34 1.34 0 0 1-1.186-.382l-6-6a2.414 2.414 0 0 1 0-3.414l6-6c.31-.311.752-.456 1.186-.382C12.428 4.072 13 5.102 13 6v1a.997.997 0 0 0 1 1h4a3 3 0 0 1 3 3");
}
</style><path class="wosu6bw4y"/>`,
		"fallback": "coolicons:arrow-big-left-bulk-round",
	});
}

export default Component;
