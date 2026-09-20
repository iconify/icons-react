import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cce75absv {
  fill: currentColor;
  d: path("M12 6.005A6.25 6.25 0 0 0 6.005 12H12zM6 14.5v19h6v-19zm8.5-2.5h19V6h-19zM36 6.005V12h5.995A6.25 6.25 0 0 0 36 6.005m6 8.495h-6v19h6zM41.995 36H36v5.995A6.25 6.25 0 0 0 41.995 36M33.5 42v-6h-19v6zM12 41.995V36H6.005A6.25 6.25 0 0 0 12 41.995m2.5-10.048l6.848-6.849a3.75 3.75 0 0 1 5.304 0l6.848 6.849V14.5h-19zM26.5 19a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m5.018 14.5l-6.634-6.634a1.25 1.25 0 0 0-1.768 0L16.482 33.5z");
}
</style><path class="cce75absv"/>`,
		"fallback": "fluent:image-table-48-filled",
	});
}

export default Component;
