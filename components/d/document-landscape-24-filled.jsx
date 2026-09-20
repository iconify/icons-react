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
		"content": `<style>.wrdy2xbyx {
  fill: currentColor;
  d: path("M22 12h-6a2 2 0 0 1-2-2V4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2zm-.5-1.5H16a.5.5 0 0 1-.5-.5V4.5z");
}
</style><path class="wrdy2xbyx"/>`,
		"fallback": "fluent:document-landscape-24-filled",
	});
}

export default Component;
