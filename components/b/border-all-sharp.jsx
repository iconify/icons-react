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
		"content": `<style>.b84_blbea {
  fill: currentColor;
  d: path("M12.5 20v-7.5H20V20zm0-8.5V4H20v7.5zm-8.5 0V4h7.5v7.5zM4 20v-7.5h7.5V20z");
}
</style><path class="b84_blbea"/>`,
		"fallback": "material-symbols-light:border-all-sharp",
	});
}

export default Component;
