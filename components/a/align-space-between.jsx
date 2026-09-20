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
		"content": `<style>.a7gqzdbdf {
  fill: currentColor;
  d: path("M7 7V4H2V2h20v2h-5v3zM2 22v-2h5v-3h10v3h5v2z");
}
</style><path class="a7gqzdbdf"/>`,
		"fallback": "material-symbols:align-space-between",
	});
}

export default Component;
