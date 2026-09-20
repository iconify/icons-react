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
		"content": `<style>.cisxgrbhd {
  fill: currentColor;
  d: path("M7.539 19.5v-10h.769V4.846h9V9.5h3.23v10zm-4.654 1h3.884v-12H2.885zm6.423-11h7V5.846h-7zm-.27 7.5h4v-5h-4zm5-3h2v-2h-2zm2.808 0h2v-2h-2zm-2.808 3h2v-2h-2zm2.808 0h2v-2h-2z");
}
</style><path class="cisxgrbhd"/>`,
		"fallback": "material-symbols-light:fax-sharp",
	});
}

export default Component;
