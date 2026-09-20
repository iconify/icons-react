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
		"content": `<style>.uh2kxtboe {
  fill: currentColor;
  d: path("M4 3h1a1 1 0 0 1 1 1v4h1V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-4H6v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m11-1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm1 1a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9.146 7.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10H5.5a.5.5 0 0 1 0-1h4.793L9.146 7.854a.5.5 0 0 1 0-.708");
}
</style><path class="uh2kxtboe"/>`,
		"fallback": "fluent:column-arrow-right-20-regular",
	});
}

export default Component;
