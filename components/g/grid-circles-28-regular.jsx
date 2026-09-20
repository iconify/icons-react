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
		"content": `<style>.oh914s7jh {
  fill: currentColor;
  d: path("M13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0m-1.875 0a3.125 3.125 0 1 1-6.25 0a3.125 3.125 0 0 1 6.25 0M25 8a5 5 0 1 0-10 0a5 5 0 0 0 10 0m-1.875 0a3.125 3.125 0 1 1-6.25 0a3.125 3.125 0 0 1 6.25 0M8 25a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-1.875a3.125 3.125 0 1 0 0-6.25a3.125 3.125 0 0 0 0 6.25M25 20a5 5 0 1 0-10 0a5 5 0 0 0 10 0m-1.875 0a3.125 3.125 0 1 1-6.25 0a3.125 3.125 0 0 1 6.25 0");
}
</style><path class="oh914s7jh"/>`,
		"fallback": "fluent:grid-circles-28-regular",
	});
}

export default Component;
