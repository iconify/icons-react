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
		"content": `<style>.y0i-sobsr {
  fill: currentColor;
  d: path("M7 19v-.808L13.096 12L7 5.808V5h10v1.25H9.102L14.727 12l-5.625 5.77H17V19z");
}
</style><path class="y0i-sobsr"/>`,
		"fallback": "material-symbols-light:functions-outline-sharp",
	});
}

export default Component;
