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
		"content": `<style>.rwaf9rbyv {
  fill: currentColor;
  d: path("M18 23v-3h-3v-2h3v-3h2v3h3v2h-3v3zM2 20v-6H1v-2l1-5h15l1 5v2h-1v3h-2v-3h-4v6zm2-2h5v-4H4zm-.95-6h12.9zM2 6V4h15v2zm1.05 6h12.9l-.6-3H3.65z");
}
</style><path class="rwaf9rbyv"/>`,
		"fallback": "material-symbols:add-business-outline",
	});
}

export default Component;
