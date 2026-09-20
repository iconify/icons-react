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
		"content": `<style>.ipg8qobuu {
  fill: currentColor;
  d: path("M3 10a7 7 0 0 1 14 0v1h-3.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5H16a2 2 0 0 0 2-2v-6a8 8 0 1 0-16 0v6a2 2 0 0 0 2 2h2.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H3zm0 2h3v5H4a1 1 0 0 1-1-1zm14 0v4a1 1 0 0 1-1 1h-2v-5z");
}
</style><path class="ipg8qobuu"/>`,
		"fallback": "fluent:headphones-20-regular",
	});
}

export default Component;
