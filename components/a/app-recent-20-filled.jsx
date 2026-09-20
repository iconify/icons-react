import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ppf2z0bsr {
  fill: currentColor;
  d: path("M7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM2 6a2 2 0 0 1 2-2v12a2 2 0 0 1-2-2zm14 10V4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2");
}
</style><path class="ppf2z0bsr"/>`,
		"fallback": "fluent:app-recent-20-filled",
	});
}

export default Component;
