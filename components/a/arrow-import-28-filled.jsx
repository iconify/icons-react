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
		"content": `<style>.h2qz3l81b {
  fill: currentColor;
  d: path("M25 5a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1M13.793 6.793a1 1 0 0 1 1.414 0l6.5 6.5a1 1 0 0 1 0 1.414l-6.5 6.5a1 1 0 1 1-1.414-1.414L18.586 15H3a1 1 0 1 1 0-2h15.586l-4.793-4.793a1 1 0 0 1 0-1.414");
}
</style><path class="h2qz3l81b"/>`,
		"fallback": "fluent:arrow-import-28-filled",
	});
}

export default Component;
