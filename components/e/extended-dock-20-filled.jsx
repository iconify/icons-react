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
		"content": `<style>.nx7n6sb9h {
  fill: currentColor;
  d: path("M10.354 4.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L10 5.207l2.646 2.647a.5.5 0 0 0 .708-.708zM3 10a1.5 1.5 0 0 0-1.5 1.5v2A1.5 1.5 0 0 0 3 15h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 5 10zm6 0a1.5 1.5 0 0 0-1.5 1.5v2A1.5 1.5 0 0 0 9 15h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 11 10zm4.5 1.5A1.5 1.5 0 0 1 15 10h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 17 15h-2a1.5 1.5 0 0 1-1.5-1.5z");
}
</style><path class="nx7n6sb9h"/>`,
		"fallback": "fluent:extended-dock-20-filled",
	});
}

export default Component;
