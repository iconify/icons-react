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
		"content": `<style>.o7b8kgbbx {
  fill: currentColor;
  d: path("m8.414 7l10.293 10.293a.999.999 0 1 1-1.414 1.414L7 8.414V14a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2Z");
}
</style><path class="o7b8kgbbx"/>`,
		"fallback": "coolicons:arrow-up-left-large-bulk-round",
	});
}

export default Component;
