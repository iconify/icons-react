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
		"content": `<style>.owyrb6bau {
  fill: currentColor;
  d: path("M166 104a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m70-74v128a14 14 0 0 1-14 14h-61.59l-14.25 25a14 14 0 0 1-24.32 0l-14.25-25H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v128a2 2 0 0 0 2 2h65.07a6 6 0 0 1 5.21 3l16 28a2 2 0 0 0 3.48 0l16-28a6 6 0 0 1 5.21-3H216a2 2 0 0 0 2-2Z");
}
</style><path class="owyrb6bau"/>`,
		"fallback": "ph:chat-centered-text-light",
	});
}

export default Component;
