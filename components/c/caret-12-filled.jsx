import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cjvr46b-s {
  d: path("M9.005 3.962c0-.89-1.077-1.337-1.707-.707L3.255 7.298c-.63.63-.184 1.707.707 1.707h3.543a1.5 1.5 0 0 0 1.5-1.5V3.962z");
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="cjvr46b-s"/></g>`,
		"fallback": "fluent:caret-12-filled",
	});
}

export default Component;
