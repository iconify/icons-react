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
		"content": `<style>.n889bjj8d {
  fill: currentColor;
  d: path("M6 19.5V4h12v15.5l-6-2.583z");
}
</style><path class="n889bjj8d"/>`,
		"fallback": "material-symbols-light:bookmark-sharp",
	});
}

export default Component;
