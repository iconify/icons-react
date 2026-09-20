import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q1qosxbwd {
  fill: currentColor;
  d: path("M8 4.465a1 1 0 0 1 1.576-.818l5.012 3.536a1 1 0 0 1 0 1.634l-5.012 3.536A1 1 0 0 1 8 11.536V9.232l-4.424 3.12A1 1 0 0 1 2 11.537V4.465a1 1 0 0 1 1.576-.818L8 6.768z");
}
</style><path class="q1qosxbwd"/>`,
		"fallback": "fluent:fast-forward-16-filled",
	});
}

export default Component;
