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
		"content": `<style>.tud_au7ls {
  fill: currentColor;
  d: path("M194.83 205.17a4 4 0 0 1-5.66 5.66l-80-80a4 4 0 0 1 0-5.66l80-80a4 4 0 1 1 5.66 5.66L117.66 128ZM72 44a4 4 0 0 0-4 4v160a4 4 0 0 0 8 0V48a4 4 0 0 0-4-4");
}
</style><path class="tud_au7ls"/>`,
		"fallback": "ph:caret-line-left-thin",
	});
}

export default Component;
