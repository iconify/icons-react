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
		"content": `<style>.bdcn6t91n {
  fill: currentColor;
  d: path("M7 17v-3H3V7h2v5h2V7h2v5h2v2H9v3zm5 0V7h9v2h-7v6h5v-2h-2.5v-2H21v6z");
}
</style><path class="bdcn6t91n"/>`,
		"fallback": "material-symbols:4g-mobiledata-outline-sharp",
	});
}

export default Component;
