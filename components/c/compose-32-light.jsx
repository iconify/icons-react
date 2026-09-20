import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mymu-dbya {
  fill: currentColor;
  d: path("M18.5 4a.5.5 0 0 1 0 1h-11A3.5 3.5 0 0 0 4 8.5v16l.005.18A3.5 3.5 0 0 0 7.5 28h16a3.5 3.5 0 0 0 3.5-3.5v-11a.5.5 0 1 1 1 0v11a4.5 4.5 0 0 1-4.5 4.5h-16a4.5 4.5 0 0 1-4.494-4.268L3 24.5v-16A4.5 4.5 0 0 1 7.5 4zm9.646-.853a.5.5 0 0 1 .707.707L13.06 19.647L12 20l.354-1.06z");
}
</style><path class="mymu-dbya"/>`,
		"fallback": "fluent:compose-32-light",
	});
}

export default Component;
