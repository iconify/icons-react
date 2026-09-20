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
		"content": `<style>.uzxvug2gs {
  fill: currentColor;
  d: path("M6 4a2 2 0 0 0-2 2v2.5a.5.5 0 0 1-1 0V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-2.5a.5.5 0 0 1 0-1H14a2 2 0 0 0 2-2v-4h-4a2 2 0 0 1-2-2V4zm-2.5 8a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-3.793l-4.146 4.147a.5.5 0 0 1-.708-.708L7.293 12z");
}
</style><path class="uzxvug2gs"/>`,
		"fallback": "fluent:contract-up-right-20-filled",
	});
}

export default Component;
