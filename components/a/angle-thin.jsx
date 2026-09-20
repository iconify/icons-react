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
		"content": `<style>.wtkbyqb0o {
  fill: currentColor;
  d: path("M100 72a4 4 0 0 1 4-4a100.11 100.11 0 0 1 100 100a4 4 0 0 1-8 0a92.1 92.1 0 0 0-92-92a4 4 0 0 1-4-4m140 124H76V32a4 4 0 0 0-8 0v36H32a4 4 0 0 0 0 8h36v124a4 4 0 0 0 4 4h168a4 4 0 0 0 0-8");
}
</style><path class="wtkbyqb0o"/>`,
		"fallback": "ph:angle-thin",
	});
}

export default Component;
