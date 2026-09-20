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
		"content": `<style>.jwwb29b-d {
  fill: currentColor;
  d: path("M4 20V4h16v16zm3.5-9.5h3v-3h-3zm6 0h3v-3h-3zm-6 6h3v-3h-3zm6 0h3v-3h-3z");
}
</style><path class="jwwb29b-d"/>`,
		"fallback": "material-symbols-light:dataset-sharp",
	});
}

export default Component;
