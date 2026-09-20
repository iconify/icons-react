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
		"content": `<style>.q-i6w_wbf {
  fill: currentColor;
  d: path("M10.25 7A6.25 6.25 0 0 0 4 13.25v21.5A6.25 6.25 0 0 0 10.25 41h27.5A6.25 6.25 0 0 0 44 34.75v-21.5A6.25 6.25 0 0 0 37.75 7zM6.5 13.25a3.75 3.75 0 0 1 3.75-3.75h5.5v29h-5.5a3.75 3.75 0 0 1-3.75-3.75zM18.25 38.5v-29h19.5a3.75 3.75 0 0 1 3.75 3.75v21.5a3.75 3.75 0 0 1-3.75 3.75z");
}
</style><path class="q-i6w_wbf"/>`,
		"fallback": "fluent:dock-panel-left-48-regular",
	});
}

export default Component;
