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
		"content": `<style>.sftqhg3ua {
  fill: currentColor;
  d: path("M4 3.002a2 2 0 0 1 2-2h3.582a1.5 1.5 0 0 1 1.06.44l2.919 2.916A1.5 1.5 0 0 1 14 5.418v7.58a2 2 0 0 1-2 2H8.666c.403-.284.765-.62 1.078-1H12a1 1 0 0 0 1-1V6.003h-2.5a1.5 1.5 0 0 1-1.5-1.5V2.002H6a1 1 0 0 0-1 1v2.02a5.5 5.5 0 0 0-1 .185zm6-.79v2.29a.5.5 0 0 0 .5.5h2.291zm0 8.288a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.854 2.353l.003.003a.5.5 0 0 0 .348.144h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 0 0-.707-.708L6 11.293V8.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708z");
}
</style><path class="sftqhg3ua"/>`,
		"fallback": "fluent:document-arrow-down-16-regular",
	});
}

export default Component;
