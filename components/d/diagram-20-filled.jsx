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
		"content": `<style>.m1ysg870w {
  fill: currentColor;
  d: path("M5 2a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h.825l.886-1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5.033a2.5 2.5 0 0 1 1 .4V5a3 3 0 0 0-3-3zm.5 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM5 8.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M6.5 11a.5.5 0 0 0-.374.832L8.941 15l-2.815 3.168A.5.5 0 0 0 6.5 19h8.095a1.5 1.5 0 0 0 1.044-.423l3.134-3.039a.75.75 0 0 0 0-1.077l-3.134-3.038A1.5 1.5 0 0 0 14.595 11z");
}
</style><path class="m1ysg870w"/>`,
		"fallback": "fluent:diagram-20-filled",
	});
}

export default Component;
