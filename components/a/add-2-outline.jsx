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
		"content": `<style>.p_0dfi6tt {
  fill: currentColor;
  d: path("M11.5 20v-7.5H4v-1h7.5V4h1v7.5H20v1h-7.5V20z");
}
</style><path class="p_0dfi6tt"/>`,
		"fallback": "material-symbols-light:add-2-outline",
	});
}

export default Component;
