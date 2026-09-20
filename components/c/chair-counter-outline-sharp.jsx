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
		"content": `<style>.vg6oz-8zc {
  fill: currentColor;
  d: path("M9.85 7h4.3l.35-1H18q0-.825-.587-1.412T16 4H8q-.825 0-1.412.588T6 6h3.5zM7 22v-1.5q.9-.625 1.913-.975T11 19.05V17H8v-2h3V9H8.45L8.1 8H4V6.125Q4 4.4 5.15 3.2T8 2h8q1.7 0 2.85 1.2T20 6.125V8h-4.1l-.35 1H13v6h3v2h-3v2.05q1.075.125 2.088.475T17 20.5V22zM9.85 7h4.3z");
}
</style><path class="vg6oz-8zc"/>`,
		"fallback": "material-symbols:chair-counter-outline-sharp",
	});
}

export default Component;
