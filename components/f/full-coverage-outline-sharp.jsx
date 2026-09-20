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
		"content": `<style>.gouislc6l {
  fill: currentColor;
  d: path("M3 20V8h1v11h14v1zm4-4V4h15v12zm1-1h13V5H8zm2-3h4V7h-4zm5 0h4v-2h-4zm0-3h4V7h-4zm-7 6V5z");
}
</style><path class="gouislc6l"/>`,
		"fallback": "material-symbols-light:full-coverage-outline-sharp",
	});
}

export default Component;
