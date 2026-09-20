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
		"content": `<style>.erk_zb5ha {
  fill: currentColor;
  d: path("M3.5 2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-.5-.5M7 11a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zM5 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z");
}
</style><path class="erk_zb5ha"/>`,
		"fallback": "fluent:align-left-20-filled",
	});
}

export default Component;
