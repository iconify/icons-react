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
		"content": `<style>.hpi-cbc-c {
  fill: currentColor;
  d: path("m17.707 17.707l-5 5a1 1 0 0 1-1.414 0l-10-10a1 1 0 0 1 0-1.414l10-10a1 1 0 0 1 1.414 0l10 10a1 1 0 0 1 0 1.414ZM9 11a1 1 0 0 0 2 0a1.001 1.001 0 0 1 1.707-.707a1 1 0 0 1 .215 1.094A.99.99 0 0 1 12 12a1 1 0 0 0 0 2a3 3 0 1 0-3-3m3 4a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="hpi-cbc-c"/>`,
		"fallback": "coolicons:diamond-help-fill-sharp",
	});
}

export default Component;
