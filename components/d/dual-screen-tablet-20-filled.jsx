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
		"content": `<style>.l812t8myb {
  fill: currentColor;
  d: path("M4 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3v-2h.5a.5.5 0 0 0 0-1H13V9a3 3 0 0 0-3-3H4zm6 12H7.5V7H10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M4 7h2.5v10H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m5.5 7a.5.5 0 0 0 0 1h.5a.5.5 0 0 0 0-1zm-6 .5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 0-1H4a.5.5 0 0 0-.5.5");
}
</style><path class="l812t8myb"/>`,
		"fallback": "fluent:dual-screen-tablet-20-filled",
	});
}

export default Component;
