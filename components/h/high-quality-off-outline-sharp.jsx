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
		"content": `<style>.tqozjgb2u {
  fill: currentColor;
  d: path("m18 15.15l-1.5-1.5V10.5h-2v1.15l-1.5-1.5V9h5zM6 15V9h1.5v2.5h2v-2L11 11v4H9.5v-2h-2v2zm13.8 7.6L17.15 20H2V4h2l2 2H4v12h11.15L1.4 4.2l1.4-1.4l18.4 18.4zm2.2-3.45l-2-2V6H8.85l-2-2H22zM9.575 12.425");
}
</style><path class="tqozjgb2u"/>`,
		"fallback": "material-symbols:high-quality-off-outline-sharp",
	});
}

export default Component;
