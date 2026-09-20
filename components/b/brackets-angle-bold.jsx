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
		"content": `<style>.janpid7zo {
  fill: currentColor;
  d: path("M90.12 46.44L38.22 128l51.9 81.56a12 12 0 1 1-20.24 12.88l-56-88a12 12 0 0 1 0-12.88l56-88a12 12 0 0 1 20.24 12.88m152 75.12l-56-88a12 12 0 1 0-20.24 12.88l51.9 81.56l-51.9 81.56a12 12 0 1 0 20.24 12.88l56-88a12 12 0 0 0 0-12.88");
}
</style><path class="janpid7zo"/>`,
		"fallback": "ph:brackets-angle-bold",
	});
}

export default Component;
