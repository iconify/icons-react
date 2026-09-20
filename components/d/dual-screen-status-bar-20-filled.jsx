import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.js9ta0b3o {
  fill: currentColor;
  d: path("M16 16h-5.5V4H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2M4 4h5.5v12H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8.5 2a.5.5 0 0 0 0 1H16a.5.5 0 0 0 0-1z");
}
</style><path class="js9ta0b3o"/>`,
		"fallback": "fluent:dual-screen-status-bar-20-filled",
	});
}

export default Component;
