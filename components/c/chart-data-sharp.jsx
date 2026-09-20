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
		"content": `<style>.z5fue-q-h {
  fill: currentColor;
  d: path("m7.4 15.289l3.05-3.031l2 2l4.05-4.045V12.5h1v-4h-4v1h2.286l-3.336 3.337l-2-2L6.712 14.6zM4 20V4h16v16z");
}
</style><path class="z5fue-q-h"/>`,
		"fallback": "material-symbols-light:chart-data-sharp",
	});
}

export default Component;
