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
		"content": `<style>.pdxia4ont {
  fill: currentColor;
  d: path("M5 21V3h13.95l4 10H19v8zm2-2h10v-6H8.05L7 10.375z");
}
</style><path class="pdxia4ont"/>`,
		"fallback": "material-symbols:devices-fold-2-sharp",
	});
}

export default Component;
