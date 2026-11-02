import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v8o-ud3zc {
  fill: currentColor;
  d: path("M21 8.236v7.528a3 3 0 0 1-1.658 2.683l-6 3a3 3 0 0 1-2.684 0l-6-3A3 3 0 0 1 3 15.764V8.236a3 3 0 0 1 1.658-2.683l6-3a3 3 0 0 1 2.684 0l6 3A3 3 0 0 1 21 8.236M13 9a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Zm-1 6a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="v8o-ud3zc"/>`,
		"fallback": "coolicons:hexagon-warning-fill",
	});
}

export default Component;
