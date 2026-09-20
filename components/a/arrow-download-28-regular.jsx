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
		"content": `<style>.the2o8bju {
  fill: currentColor;
  d: path("M14.75 3.75a.75.75 0 0 0-1.5 0v14.69l-4.97-4.97a.75.75 0 0 0-1.06 1.06l6.25 6.25a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 1 0-1.06-1.06l-4.97 4.97zm-9 19.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="the2o8bju"/>`,
		"fallback": "fluent:arrow-download-28-regular",
	});
}

export default Component;
