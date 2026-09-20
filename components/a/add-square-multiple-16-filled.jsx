import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cjqlwmgdt {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.5 2.5h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 1 0 0-1h-2v-2a.5.5 0 0 0-1 0zm4 6.5a2.5 2.5 0 0 0 2.5-2.5V3.268A2 2 0 0 1 14 5v5.5a3.5 3.5 0 0 1-3.5 3.5H5a2 2 0 0 1-1.732-1z");
}
</style><path class="cjqlwmgdt"/>`,
		"fallback": "fluent:add-square-multiple-16-filled",
	});
}

export default Component;
