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
		"content": `<style>.qcf6x4iwj {
  fill: currentColor;
  d: path("M7.5 16h12V4h-2v6.116l-2-1.193l-2 1.193V4h-6zm-1 1V3h14v14zm-3 3V6.616h1V19h12.385v1zm4-16v12zm6 6.116l2-1.193l2 1.193l-2-1.193z");
}
</style><path class="qcf6x4iwj"/>`,
		"fallback": "material-symbols-light:collections-bookmark-outline-sharp",
	});
}

export default Component;
