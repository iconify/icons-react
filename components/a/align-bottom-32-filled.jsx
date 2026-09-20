import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ak-18k5pj {
  fill: currentColor;
  d: path("M4 29a1 1 0 1 1 0-2h24a1 1 0 1 1 0 2zm1-7.5A3.5 3.5 0 0 0 8.5 25h3a3.5 3.5 0 0 0 3.5-3.5v-15A3.5 3.5 0 0 0 11.5 3h-3A3.5 3.5 0 0 0 5 6.5zm12 0a3.5 3.5 0 0 0 3.5 3.5h3a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 23.5 9h-3a3.5 3.5 0 0 0-3.5 3.5z");
}
</style><path class="ak-18k5pj"/>`,
		"fallback": "fluent:align-bottom-32-filled",
	});
}

export default Component;
