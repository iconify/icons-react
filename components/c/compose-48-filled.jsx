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
		"content": `<style>.ocj_mdb8s {
  fill: currentColor;
  d: path("M26.5 8a1.5 1.5 0 0 1 0 3h-14A3.5 3.5 0 0 0 9 14.5v21a3.5 3.5 0 0 0 3.5 3.5h21a3.5 3.5 0 0 0 3.5-3.5v-14a1.5 1.5 0 0 1 3 0v14a6.5 6.5 0 0 1-6.5 6.5h-21A6.5 6.5 0 0 1 6 35.5v-21A6.5 6.5 0 0 1 12.5 8zm12.94-1.56a1.5 1.5 0 1 1 2.12 2.12L22.183 27.94L19 29l1.06-3.182z");
}
</style><path class="ocj_mdb8s"/>`,
		"fallback": "fluent:compose-48-filled",
	});
}

export default Component;
