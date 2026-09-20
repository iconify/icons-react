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
		"content": `<style>.xta5jsbqr {
  fill: currentColor;
  d: path("M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0M6 10a.5.5 0 0 0 .5.5h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0-.5.5");
}
</style><path class="xta5jsbqr"/>`,
		"fallback": "fluent:add-circle-20-filled",
	});
}

export default Component;
