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
		"content": `<style>.ygtvc5brp {
  fill: currentColor;
  d: path("M4 18V6h16v12z");
}
</style><path class="ygtvc5brp"/>`,
		"fallback": "material-symbols-light:crop-7-5-sharp",
	});
}

export default Component;
