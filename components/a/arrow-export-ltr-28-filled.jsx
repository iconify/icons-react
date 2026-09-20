import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vd6yibbmz {
  fill: currentColor;
  d: path("M3 5a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m14.793 1.793a1 1 0 0 1 1.414 0l6.5 6.5a1 1 0 0 1 0 1.414l-6.5 6.5a1 1 0 1 1-1.414-1.414L22.586 15H7a1 1 0 1 1 0-2h15.586l-4.793-4.793a1 1 0 0 1 0-1.414");
}
</style><path class="vd6yibbmz"/>`,
		"fallback": "fluent:arrow-export-ltr-28-filled",
	});
}

export default Component;
