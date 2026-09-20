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
		"content": `<style>.drdne8bss {
  fill: currentColor;
  d: path("M4 18v-6h16v6zm0-8V9h16v1zm0-3V6h16v1z");
}
</style><path class="drdne8bss"/>`,
		"fallback": "material-symbols-light:horizontal-split-sharp",
	});
}

export default Component;
