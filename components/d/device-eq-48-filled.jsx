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
		"content": `<style>.t_v3mac0k {
  fill: currentColor;
  d: path("M24 4a1.5 1.5 0 0 1 1.5 1.5v37a1.5 1.5 0 0 1-3 0v-37A1.5 1.5 0 0 1 24 4m-8.5 7a1.5 1.5 0 0 1 1.5 1.5v23a1.5 1.5 0 0 1-3 0v-23a1.5 1.5 0 0 1 1.5-1.5m17 0a1.5 1.5 0 0 1 1.5 1.5v23a1.5 1.5 0 0 1-3 0v-23a1.5 1.5 0 0 1 1.5-1.5m-25 7A1.5 1.5 0 0 1 9 19.5v9a1.5 1.5 0 0 1-3 0v-9A1.5 1.5 0 0 1 7.5 18m33 0a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="t_v3mac0k"/>`,
		"fallback": "fluent:device-eq-48-filled",
	});
}

export default Component;
