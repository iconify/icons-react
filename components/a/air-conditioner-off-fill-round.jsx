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
		"content": `<style>.ed7z7vbhd {
  fill: currentColor;
  d: path("M7 2h10a5 5 0 0 1 0 10H7A5 5 0 0 1 7 2m0 5a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z");
}
</style><path class="ed7z7vbhd"/>`,
		"fallback": "coolicons:air-conditioner-off-fill-round",
	});
}

export default Component;
