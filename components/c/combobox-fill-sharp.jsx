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
		"content": `<style>.hlksaabgr {
  fill: currentColor;
  d: path("M21 2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM8 6a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0Zm6.707-.707a.999.999 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a.999.999 0 1 0-1.414-1.414L16 6.586ZM21 14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Zm-4 3H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2");
}
</style><path class="hlksaabgr"/>`,
		"fallback": "coolicons:combobox-fill-sharp",
	});
}

export default Component;
