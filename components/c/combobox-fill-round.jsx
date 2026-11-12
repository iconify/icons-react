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
		"content": `<style>.xtxsslb7w {
  fill: currentColor;
  d: path("M6 2h12a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m2 4a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0Zm6.707-.707a.999.999 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a.999.999 0 1 0-1.414-1.414L16 6.586ZM5 14h14a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3m12 3H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2");
}
</style><path class="xtxsslb7w"/>`,
		"fallback": "coolicons:combobox-fill-round",
	});
}

export default Component;
