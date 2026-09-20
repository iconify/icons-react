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
		"content": `<style>.wvqx3mvqo {
  fill: currentColor;
  d: path("M5 12.5v-1h14v1z");
}
</style><path class="wvqx3mvqo"/>`,
		"fallback": "material-symbols-light:horizontal-rule",
	});
}

export default Component;
