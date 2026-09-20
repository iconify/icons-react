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
		"content": `<style>.t2saqfb-z {
  fill: currentColor;
  d: path("M148 104V64a4 4 0 0 1 8 0v30.34l49.17-49.17a4 4 0 1 1 5.66 5.66L161.66 100H192a4 4 0 0 1 0 8h-40a4 4 0 0 1-4-4m-44 44H64a4 4 0 0 0 0 8h30.34l-49.17 49.17a4 4 0 0 0 5.66 5.66L100 161.66V192a4 4 0 0 0 8 0v-40a4 4 0 0 0-4-4m57.66 8H192a4 4 0 0 0 0-8h-40a4 4 0 0 0-4 4v40a4 4 0 0 0 8 0v-30.34l49.17 49.17a4 4 0 0 0 5.66-5.66ZM104 60a4 4 0 0 0-4 4v30.34L50.83 45.17a4 4 0 0 0-5.66 5.66L94.34 100H64a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4");
}
</style><path class="t2saqfb-z"/>`,
		"fallback": "ph:arrows-in-thin",
	});
}

export default Component;
