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
		"content": `<style>.kqspalbsl {
  fill: currentColor;
  d: path("M9 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.5-12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.5-18a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}
</style><path class="kqspalbsl"/>`,
		"fallback": "fluent:dialpad-28-regular",
	});
}

export default Component;
