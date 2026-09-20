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
		"content": `<style>.mpca__bpq {
  fill: currentColor;
  d: path("M10 20v-7L2.95 4h18.1L14 13v7z");
}
</style><path class="mpca__bpq"/>`,
		"fallback": "material-symbols:filter-alt-sharp",
	});
}

export default Component;
