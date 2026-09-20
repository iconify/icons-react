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
		"content": `<style>.nb4gjpbao {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-4V7h10v10zm2-2h6V9H5zM3 5V3h18v2zm12 12v-2h6v2z");
}
</style><path class="nb4gjpbao"/>`,
		"fallback": "material-symbols:format-image-inline-left-outline-sharp",
	});
}

export default Component;
