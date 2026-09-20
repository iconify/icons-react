import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o71_ctbfx {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m2.851 10.856A.5.5 0 0 1 12.5 13h-5a.5.5 0 0 1 0-1h3.793L7.146 7.854a.5.5 0 1 1 .708-.708L12 11.293V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.144.351z");
}
</style><path class="o71_ctbfx"/>`,
		"fallback": "fluent:arrow-circle-down-right-20-filled",
	});
}

export default Component;
