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
		"content": `<style>.v_vw0tbqh {
  fill: currentColor;
  d: path("M5 6v12a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0m3-1h12a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m0 4h12a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m0 4h12a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m0 4h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2");
}
</style><path class="v_vw0tbqh"/>`,
		"fallback": "coolicons:blockquote-fill",
	});
}

export default Component;
