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
		"content": `<style>.ak1734bru {
  fill: currentColor;
  d: path("M7 21V3h10v18zm1-1h8V4H8zm0 0V4z");
}
</style><path class="ak1734bru"/>`,
		"fallback": "material-symbols-light:crop-2-3-outline-sharp",
	});
}

export default Component;
