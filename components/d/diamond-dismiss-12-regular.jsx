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
		"content": `<style>.jp-xozabl {
  fill: currentColor;
  d: path("M4.586 1.085a2 2 0 0 1 2.828 0l3.5 3.5a2 2 0 0 1 0 2.827l-3.5 3.5a2 2 0 0 1-2.828 0l-3.5-3.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0l-3.5 3.5a1 1 0 0 0 0 1.413l3.5 3.5a1 1 0 0 0 1.414 0l3.5-3.5a1 1 0 0 0 0-1.414zm.44 2.355a.5.5 0 1 1 .707.707L6.707 6l1.147 1.147a.5.5 0 0 1-.707.707L6 6.707L4.854 7.854a.5.5 0 0 1-.707-.707L5.293 6L4.147 4.854a.5.5 0 0 1 .707-.707L6 5.293z");
}
</style><path class="jp-xozabl"/>`,
		"fallback": "fluent:diamond-dismiss-12-regular",
	});
}

export default Component;
