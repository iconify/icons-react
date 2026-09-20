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
		"content": `<style>.wixb5kfyb {
  fill: currentColor;
  d: path("m12 9.077l-2-2V3h4v4.077zM16.923 14l-2-2l2-2H21v4zM3 14v-4h4.077l2 2l-2 2zm7 7v-4.077l2-2l2 2V21z");
}
</style><path class="wixb5kfyb"/>`,
		"fallback": "material-symbols-light:gamepad",
	});
}

export default Component;
