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
		"content": `<style>.smt84obwq {
  fill: currentColor;
  d: path("M4.5 3A1.5 1.5 0 0 0 3 4.5v5A1.5 1.5 0 0 0 4.5 11h3A1.5 1.5 0 0 0 9 9.5v-5A1.5 1.5 0 0 0 7.5 3zM4 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM12.5 9a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 15.5 9zm-.5 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm-1-6A1.5 1.5 0 0 1 12.5 3h3A1.5 1.5 0 0 1 17 4.5v1A1.5 1.5 0 0 1 15.5 7h-3A1.5 1.5 0 0 1 11 5.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-8 9A1.5 1.5 0 0 0 3 14.5v1A1.5 1.5 0 0 0 4.5 17h3A1.5 1.5 0 0 0 9 15.5v-1A1.5 1.5 0 0 0 7.5 13zM4 14.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z");
}
</style><path class="smt84obwq"/>`,
		"fallback": "fluent:glance-20-regular",
	});
}

export default Component;
