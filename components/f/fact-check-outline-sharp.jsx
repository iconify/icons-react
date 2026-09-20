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
		"content": `<style>.x37weabng {
  fill: currentColor;
  d: path("M5 17h5v-2H5zm9.55-2l4.95-4.95l-1.425-1.425l-3.525 3.55l-1.425-1.425l-1.4 1.425zM5 13h5v-2H5zm0-4h5V7H5zM2 21V3h20v18zm2-2h16V5H4zm0 0V5z");
}
</style><path class="x37weabng"/>`,
		"fallback": "material-symbols:fact-check-outline-sharp",
	});
}

export default Component;
