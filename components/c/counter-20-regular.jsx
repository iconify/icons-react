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
		"content": `<style>.djvcd9erp {
  fill: currentColor;
  d: path("M6 6a2 2 0 0 1 2 2v3a2 2 0 1 1-4 0V8a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m10-4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-1.99-1.796L2 14V5a2 2 0 0 1 2-2zM4 4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5.5V4zm6.5 11H14v-3.384a3.2 3.2 0 0 1-.879.37a.5.5 0 0 1-.242-.971a2.2 2.2 0 0 0 1.196-.78l.009-.012A.5.5 0 0 1 15 10.5V15h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1v2a2 2 0 1 1-4 0V4h-1.5zM13 6a1 1 0 1 0 2 0V4h-2z");
}
</style><path class="djvcd9erp"/>`,
		"fallback": "fluent:counter-20-regular",
	});
}

export default Component;
