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
		"content": `<style>.p34dqwjuq {
  fill: currentColor;
  d: path("M232 64v128a16 16 0 0 1-16 16H83l-32.6 28.16l-.09.07A15.9 15.9 0 0 1 40 240a16.05 16.05 0 0 1-6.79-1.52A15.84 15.84 0 0 1 24 224V64a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16");
}
</style><path class="p34dqwjuq"/>`,
		"fallback": "ph:chat-fill",
	});
}

export default Component;
