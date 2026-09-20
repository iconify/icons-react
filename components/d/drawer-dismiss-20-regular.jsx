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
		"content": `<style>.ykvfmqpju {
  fill: currentColor;
  d: path("M18 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.646-1.146a.5.5 0 0 0-.708-.708L13.5 4.793l-1.146-1.147a.5.5 0 0 0-.708.708L12.793 5.5l-1.147 1.146a.5.5 0 0 0 .708.708L13.5 6.207l1.146 1.147a.5.5 0 0 0 .708-.708L14.207 5.5zM17 9.743a5.5 5.5 0 0 1-1 .657v.6h-3.5a.5.5 0 0 0-.5.5a2 2 0 1 1-4 0a.5.5 0 0 0-.5-.5H4V8h4.6a5.5 5.5 0 0 1-.393-1H4a2 2 0 0 1 2-2h2.022a5.5 5.5 0 0 1 .185-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3zM16 15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3h3.041a3 3 0 0 0 5.918 0H16z");
}
</style><path class="ykvfmqpju"/>`,
		"fallback": "fluent:drawer-dismiss-20-regular",
	});
}

export default Component;
