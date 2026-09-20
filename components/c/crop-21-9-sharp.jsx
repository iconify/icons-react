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
		"content": `<style>.cytol_8_c {
  fill: currentColor;
  d: path("M3 16V8h18v8z");
}
</style><path class="cytol_8_c"/>`,
		"fallback": "material-symbols-light:crop-21-9-sharp",
	});
}

export default Component;
