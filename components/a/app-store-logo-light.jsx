import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v1h9kshdn {
  fill: currentColor;
  d: path("m62.62 195.05l-9.45 16A6 6 0 0 1 42.83 205l9.46-16a6 6 0 1 1 10.33 6.1ZM232 154h-48.94l-31.31-53a6 6 0 1 0-10.33 6.11l61.41 103.93a6 6 0 0 0 10.34-6.1l-23-38.95H232a6 6 0 0 0 0-12Zm-89.53 0H86.88l70.29-118.95A6 6 0 0 0 146.83 29L128 60.82L109.17 29a6 6 0 0 0-10.34 6.1L121 72.62L72.94 154H24a6 6 0 0 0 0 12h118.47a6 6 0 1 0 0-12");
}
</style><path class="v1h9kshdn"/>`,
		"fallback": "ph:app-store-logo-light",
	});
}

export default Component;
