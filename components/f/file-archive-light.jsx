import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aqwdcaczn {
  fill: currentColor;
  d: path("m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218h-90v-20h10a6 6 0 0 0 0-12h-10v-20h10a6 6 0 0 0 0-12h-10v-20h10a6 6 0 0 0 0-12h-10v-10a6 6 0 0 0-12 0v10H88a6 6 0 0 0 0 12h10v20H88a6 6 0 0 0 0 12h10v20H88a6 6 0 0 0 0 12h10v20H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2");
}
</style><path class="aqwdcaczn"/>`,
		"fallback": "ph:file-archive-light",
	});
}

export default Component;
