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
		"content": `<style>.q-cfbdcdn {
  fill: currentColor;
  d: path("M17 15.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 9 15.5v-3a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5zm-1.5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5zM11 7.5A1.5 1.5 0 0 1 9.5 9h-5A1.5 1.5 0 0 1 3 7.5v-3A1.5 1.5 0 0 1 4.5 3h5A1.5 1.5 0 0 1 11 4.5zM9.5 8a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5zm6 1A1.5 1.5 0 0 0 17 7.5v-3A1.5 1.5 0 0 0 15.5 3h-1A1.5 1.5 0 0 0 13 4.5v3A1.5 1.5 0 0 0 14.5 9zm.5-1.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm-9 8A1.5 1.5 0 0 1 5.5 17h-1A1.5 1.5 0 0 1 3 15.5v-3A1.5 1.5 0 0 1 4.5 11h1A1.5 1.5 0 0 1 7 12.5zm-1.5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5z");
}
</style><path class="q-cfbdcdn"/>`,
		"fallback": "fluent:glance-horizontal-20-regular",
	});
}

export default Component;
