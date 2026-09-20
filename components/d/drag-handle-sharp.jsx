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
		"content": `<style>.y8jm_xmse {
  fill: currentColor;
  d: path("M5 14.5v-1h14v1zm0-4v-1h14v1z");
}
</style><path class="y8jm_xmse"/>`,
		"fallback": "material-symbols-light:drag-handle-sharp",
	});
}

export default Component;
