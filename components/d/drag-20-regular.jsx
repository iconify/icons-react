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
		"content": `<style>.pctbz34ps {
  fill: currentColor;
  d: path("M9.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L10.5 3.707V6.5a.5.5 0 0 1-1 0V3.707L8.354 4.854a.5.5 0 1 1-.708-.708zM10 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2m5.854 1.354l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L16.293 9.5H13.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708m-5.5 5.5l2-2a.5.5 0 0 0-.708-.708L10.5 16.293V13.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0m-8.208-7.5a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L3.707 9.5H6.5a.5.5 0 0 1 0 1H3.707l1.147 1.146a.5.5 0 0 1-.708.708z");
}
</style><path class="pctbz34ps"/>`,
		"fallback": "fluent:drag-20-regular",
	});
}

export default Component;
