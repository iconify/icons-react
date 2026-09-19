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
		"content": `<style>.gh29q7bgj {
  fill: currentColor;
  d: path("M17.83 15h1.67c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H17v-1h2v.5h1.5v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1H19v1h-2V13h-1.17zM8 10.83V15H6.5v-2.5h-2V15H3V9h1.5v2h2V9.33L1.39 4.22L2.8 2.81l18.38 18.38l-1.41 1.41l-7.6-7.6H10v-2.17z");
}
</style><path class="gh29q7bgj"/>`,
		"fallback": "ic:baseline-hls-off",
	});
}

export default Component;
