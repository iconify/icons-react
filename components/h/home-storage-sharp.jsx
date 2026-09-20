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
		"content": `<style>.dy2ezbbqh {
  fill: currentColor;
  d: path("M5 21L3 9h18l-2 12zm4-6h6v-2H9zM5 8V6h14v2zm2-3V3h10v2z");
}
</style><path class="dy2ezbbqh"/>`,
		"fallback": "material-symbols:home-storage-sharp",
	});
}

export default Component;
