import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mw3edqbts {
  fill: currentColor;
  d: path("M14.98 8.5a6.999 6.999 0 0 1-13.96 0zM8 1a7 7 0 0 1 6.98 6.5H1.02A7 7 0 0 1 8 1");
}
</style><path class="mw3edqbts"/>`,
		"fallback": "fluent:circle-line-16-filled",
	});
}

export default Component;
