import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n05q3mxvn {
  fill: currentColor;
  d: path("M7 22v-1.5q.9-.625 1.913-.975T11 19.05V17H8v-2h3V9H8.45L8.1 8H4V6.125Q4 4.4 5.15 3.2T8 2h8q1.7 0 2.85 1.2T20 6.125V8h-4.1l-.35 1H13v6h3v2h-3v2.05q1.075.125 2.088.475T17 20.5V22z");
}
</style><path class="n05q3mxvn"/>`,
		"fallback": "material-symbols:chair-counter-sharp",
	});
}

export default Component;
