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
		"content": `<style>.gly_b-bcm {
  fill: currentColor;
  d: path("M4 20V4h2v16zm12.45-4.45l-1.4-1.425L16.175 13H8v-2h8.175L15.05 9.875l1.4-1.425L20 12zM12 20v-5h2v5zm0-11V4h2v5z");
}
</style><path class="gly_b-bcm"/>`,
		"fallback": "material-symbols:format-text-overflow-sharp",
	});
}

export default Component;
