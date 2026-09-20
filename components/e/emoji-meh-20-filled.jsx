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
		"content": `<style>.xa0hq58cq {
  fill: currentColor;
  d: path("M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m6.5-1.5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-6.5 3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5");
}
</style><path class="xa0hq58cq"/>`,
		"fallback": "fluent:emoji-meh-20-filled",
	});
}

export default Component;
