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
		"content": `<style>.av_kt1b3x {
  fill: currentColor;
  d: path("M4 2a2 2 0 1 0 0 4h5a2 2 0 1 0 0-4zm0 6a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4zm0 6a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4z");
}
</style><path class="av_kt1b3x"/>`,
		"fallback": "fluent:data-bar-horizontal-20-filled",
	});
}

export default Component;
