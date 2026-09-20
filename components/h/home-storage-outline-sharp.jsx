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
		"content": `<style>.hydbnn_uc {
  fill: currentColor;
  d: path("M5 21L3 9h18l-2 12zm1.675-2h10.65l1.275-8H5.4zM9 15h6v-2H9zM5 8V6h14v2zm2-3V3h10v2zm-.325 14h10.65z");
}
</style><path class="hydbnn_uc"/>`,
		"fallback": "material-symbols:home-storage-outline-sharp",
	});
}

export default Component;
