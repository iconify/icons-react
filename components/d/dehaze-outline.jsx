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
		"content": `<style>.v2ttsid9z {
  fill: currentColor;
  d: path("M4 7V6h16v1zm0 11v-1h16v1zm0-5.5v-1h16v1z");
}
</style><path class="v2ttsid9z"/>`,
		"fallback": "material-symbols-light:dehaze-outline",
	});
}

export default Component;
