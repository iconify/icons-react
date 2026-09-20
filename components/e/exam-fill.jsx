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
		"content": `<style>.nqfku0wyt {
  fill: currentColor;
  d: path("M96 113.89L107.06 136H84.94ZM232 56v160a8 8 0 0 1-11.58 7.16L192 208.94l-28.42 14.22a8 8 0 0 1-7.16 0L128 208.94l-28.42 14.22a8 8 0 0 1-7.16 0L64 208.94l-28.42 14.22A8 8 0 0 1 24 216V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-96.84 100.42l-32-64a8 8 0 0 0-14.32 0l-32 64a8 8 0 0 0 14.32 7.16L76.94 152h38.12l5.78 11.58a8 8 0 1 0 14.32-7.16M208 128a8 8 0 0 0-8-8h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 8-8");
}
</style><path class="nqfku0wyt"/>`,
		"fallback": "ph:exam-fill",
	});
}

export default Component;
