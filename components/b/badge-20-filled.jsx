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
		"content": `<style>.p-fod0byo {
  fill: currentColor;
  d: path("M16 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1c.35 0 .687-.06 1-.17V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.17A3 3 0 0 0 16 7");
}
</style><path class="p-fod0byo"/>`,
		"fallback": "fluent:badge-20-filled",
	});
}

export default Component;
