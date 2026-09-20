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
		"content": `<style>.bvf1-gbuf {
  fill: currentColor;
  d: path("M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2zm3 1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm-5 5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1m0 3h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1M6 14.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5");
}
</style><path class="bvf1-gbuf"/>`,
		"fallback": "fluent:clipboard-text-20-filled",
	});
}

export default Component;
