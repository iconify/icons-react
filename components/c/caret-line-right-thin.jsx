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
		"content": `<style>.htec931qf {
  fill: currentColor;
  d: path("M146.83 125.17a4 4 0 0 1 0 5.66l-80 80a4 4 0 0 1-5.66-5.66L138.34 128L61.17 50.83a4 4 0 0 1 5.66-5.66ZM184 44a4 4 0 0 0-4 4v160a4 4 0 0 0 8 0V48a4 4 0 0 0-4-4");
}
</style><path class="htec931qf"/>`,
		"fallback": "ph:caret-line-right-thin",
	});
}

export default Component;
