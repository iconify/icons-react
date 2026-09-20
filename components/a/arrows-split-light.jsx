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
		"content": `<style>.xa73hnotr {
  fill: currentColor;
  d: path("m228.24 188.24l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L186 201.51v-63l-58-58l-58 58v63l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L58 201.51V136a6 6 0 0 1 1.76-4.24L122 69.51V24a6 6 0 0 1 12 0v45.51l62.24 62.25A6 6 0 0 1 198 136v65.51l21.76-21.75a6 6 0 0 1 8.48 8.48");
}
</style><path class="xa73hnotr"/>`,
		"fallback": "ph:arrows-split-light",
	});
}

export default Component;
