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
		"content": `<style>.nb53bubxw {
  fill: currentColor;
  d: path("M7 4.5q0 .257-.05.5H10a1 1 0 0 1 1 1v2h-1a2 2 0 0 0-1.5.677C8.189 9.03 8 9.493 8 10v1H6a1 1 0 0 1-1-1V6.95a2.5 2.5 0 0 1-1 0V10a2 2 0 0 0 2 2h2v2a1.99 1.99 0 0 0 1.158 1.815a5.5 5.5 0 0 1-.147-1.666A1 1 0 0 1 9 14v-4a1 1 0 0 1 1-1h4q.075 0 .149.011a5.6 5.6 0 0 1 1.666.147A2.01 2.01 0 0 0 14 8h-2V6a2 2 0 0 0-2-2H6.95q.05.243.05.5m-1 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m11 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-11 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m13-1a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5z");
}
</style><path class="nb53bubxw"/>`,
		"fallback": "fluent:group-dismiss-20-regular",
	});
}

export default Component;
