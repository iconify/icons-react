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
		"content": `<style>.hgxnn67bd {
  fill: currentColor;
  d: path("M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-2V4a8 8 0 1 1 0 16");
}
</style><path class="hgxnn67bd"/>`,
		"fallback": "fluent:dark-theme-24-filled",
	});
}

export default Component;
