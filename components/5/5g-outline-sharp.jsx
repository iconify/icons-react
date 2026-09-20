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
		"content": `<style>.o5nsw9bgs {
  fill: currentColor;
  d: path("M3 17v-2h5v-2H3V7h7v2H5v2h5v6zm18-6v6h-9V7h9v2h-7v6h5v-2h-2.5v-2z");
}
</style><path class="o5nsw9bgs"/>`,
		"fallback": "material-symbols:5g-outline-sharp",
	});
}

export default Component;
