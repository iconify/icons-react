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
		"content": `<style>.b9n701b8u {
  fill: currentColor;
  d: path("M4 20V4h16v16zm3.73-3.5h1V12h-1zm7.54 0h1V7h-1zm-3.77 0h1V14h-1zm0-4.5h1v-2h-1z");
}
</style><path class="b9n701b8u"/>`,
		"fallback": "material-symbols-light:analytics-sharp",
	});
}

export default Component;
