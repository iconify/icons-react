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
		"content": `<style>.ohi3oqbqy {
  fill: currentColor;
  d: path("M6.5 16.5h6v-1h-6zm10 0h1v-9h-1zm-10-4h6v-1h-6zm0-4h6v-1h-6zM3 20V4h18v16zm1-1h16V5H4zm0 0V5z");
}
</style><path class="ohi3oqbqy"/>`,
		"fallback": "material-symbols-light:clarify-outline-sharp",
	});
}

export default Component;
