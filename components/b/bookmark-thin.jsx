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
		"content": `<style>.x_0_zqg3h {
  fill: currentColor;
  d: path("M184 36H72a12 12 0 0 0-12 12v176a4 4 0 0 0 6.12 3.39L128 188.72l61.89 38.67a4 4 0 0 0 2.11.61a4.06 4.06 0 0 0 1.94-.5A4 4 0 0 0 196 224V48a12 12 0 0 0-12-12M72 44h112a4 4 0 0 1 4 4v120.78l-57.89-36.17a4 4 0 0 0-4.24 0L68 168.78V48a4 4 0 0 1 4-4m58.11 136.61a4 4 0 0 0-4.24 0L68 216.78v-38.56l60-37.5l60 37.5v38.56Z");
}
</style><path class="x_0_zqg3h"/>`,
		"fallback": "ph:bookmark-thin",
	});
}

export default Component;
