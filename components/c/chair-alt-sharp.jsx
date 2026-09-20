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
		"content": `<style>.zjpmdwm-u {
  fill: currentColor;
  d: path("M6.385 19.808V12.23h2.5v-2.077h-2.5V4.577h11.23v5.577h-2.5v2.077h2.5v7.577h-1v-3h-9.23v3zm3.5-7.577h4.23v-2.077h-4.23z");
}
</style><path class="zjpmdwm-u"/>`,
		"fallback": "material-symbols-light:chair-alt-sharp",
	});
}

export default Component;
