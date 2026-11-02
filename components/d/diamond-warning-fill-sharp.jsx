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
		"content": `<style>.mxce2yuti {
  fill: currentColor;
  d: path("m17.707 17.707l-5 5a1 1 0 0 1-1.414 0l-10-10a1 1 0 0 1 0-1.414l10-10a1 1 0 0 1 1.414 0l10 10a1 1 0 0 1 0 1.414ZM13 9a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Zm-1 6a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="mxce2yuti"/>`,
		"fallback": "coolicons:diamond-warning-fill-sharp",
	});
}

export default Component;
