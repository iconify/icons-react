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
		"content": `<style>.abr8wy8rg {
  fill: currentColor;
  d: path("m7 22l4-7.5l-8-1L15 2h2l-4 7.5l8 1L9 22zm5.55-6.175l4.025-3.85l-6.725-.85L11.425 8.2l-4 3.85l6.7.825zM12 12");
}
</style><path class="abr8wy8rg"/>`,
		"fallback": "material-symbols:electric-bolt-outline-sharp",
	});
}

export default Component;
