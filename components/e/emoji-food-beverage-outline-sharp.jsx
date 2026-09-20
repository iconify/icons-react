import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.eyhuex28v {
  fill: currentColor;
  d: path("M5 20v-1h14v1zm0-3.77V4h14.308q.69 0 1.191.472T21 5.634v2.231q0 .69-.501 1.163q-.501.472-1.191.472h-2v6.73zM6 5h10.308zm11.308 3.5h2q.288 0 .49-.183T20 7.865v-2.23q0-.27-.202-.452Q19.596 5 19.308 5h-2zm-1 6.73V5H9.885v1.17l1.73 1.426v3.75h-4.23v-3.75l1.73-1.427V5H6v10.23zM9.116 5h.769z");
}
</style><path class="eyhuex28v"/>`,
		"fallback": "material-symbols-light:emoji-food-beverage-outline-sharp",
	});
}

export default Component;
