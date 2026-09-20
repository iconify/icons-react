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
		"content": `<style>.gi4qwaclz {
  fill: currentColor;
  d: path("M5.25 41.5a1.25 1.25 0 1 1 0-2.5h37.5a1.25 1.25 0 1 1 0 2.5zM26 32.25a4.25 4.25 0 0 0 4.25 4.25h5.5A4.25 4.25 0 0 0 40 32.25v-15A4.25 4.25 0 0 0 35.75 13h-5.5A4.25 4.25 0 0 0 26 17.25zM12.25 36.5h5.5A4.25 4.25 0 0 0 22 32.25V10a4.25 4.25 0 0 0-4.25-4.25h-5.5A4.25 4.25 0 0 0 8 10v22.25a4.25 4.25 0 0 0 4.25 4.25");
}
</style><path class="gi4qwaclz"/>`,
		"fallback": "fluent:align-bottom-48-filled",
	});
}

export default Component;
