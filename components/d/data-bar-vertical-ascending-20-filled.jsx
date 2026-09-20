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
		"content": `<style>.kj72z7b2g {
  fill: currentColor;
  d: path("M15 3a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2m-5 3a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0V8a2 2 0 0 1 2-2M5 9a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2");
}
</style><path class="kj72z7b2g"/>`,
		"fallback": "fluent:data-bar-vertical-ascending-20-filled",
	});
}

export default Component;
