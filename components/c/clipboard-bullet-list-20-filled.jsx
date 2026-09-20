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
		"content": `<style>.t2xo9pb2g {
  fill: currentColor;
  d: path("M7.085 3H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2h-3a1.5 1.5 0 0 0-1.415 1M8.5 3h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1M9 8.5a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5m-1-6a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m0 3a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.75 3.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5");
}
</style><path class="t2xo9pb2g"/>`,
		"fallback": "fluent:clipboard-bullet-list-20-filled",
	});
}

export default Component;
