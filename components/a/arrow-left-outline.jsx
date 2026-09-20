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
		"content": `<style>.o3ft3qbpp {
  fill: currentColor;
  d: path("M13.5 15.808L9.692 12L13.5 8.192z");
}
</style><path class="o3ft3qbpp"/>`,
		"fallback": "material-symbols-light:arrow-left-outline",
	});
}

export default Component;
