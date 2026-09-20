import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g_5toowut {
  fill: currentColor;
  d: path("M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32M92 184a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="g_5toowut"/>`,
		"fallback": "ph:dice-six-fill",
	});
}

export default Component;
