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
		"content": `<style>.m4e-jwdzh {
  fill: currentColor;
  d: path("M6.5 17.5v-11h1v11zm10.5-.192L11.692 12L17 6.692l.708.708l-4.6 4.6l4.6 4.6z");
}
</style><path class="m4e-jwdzh"/>`,
		"fallback": "material-symbols-light:first-page-sharp",
	});
}

export default Component;
