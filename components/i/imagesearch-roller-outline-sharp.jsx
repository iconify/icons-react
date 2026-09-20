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
		"content": `<style>.xk1wetbtx {
  fill: currentColor;
  d: path("M16 23h-6v-8h2v-3H2V4h4V2h14v6H6V6H4v4h10v5h2zm-4-2h2v-4h-2zM8 6h10V4H8zm4 15h2zM8 6V4z");
}
</style><path class="xk1wetbtx"/>`,
		"fallback": "material-symbols:imagesearch-roller-outline-sharp",
	});
}

export default Component;
