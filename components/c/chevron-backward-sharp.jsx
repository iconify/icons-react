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
		"content": `<style>.bvzoi796h {
  fill: currentColor;
  d: path("M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6z");
}
</style><path class="bvzoi796h"/>`,
		"fallback": "material-symbols-light:chevron-backward-sharp",
	});
}

export default Component;
