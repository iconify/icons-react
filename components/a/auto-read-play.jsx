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
		"content": `<style>.poz06h2_q {
  fill: currentColor;
  d: path("M10 13.077L14.616 10L10 6.923zm-7 7V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616v10.769q0 .69-.463 1.153T19.385 17H6.077z");
}
</style><path class="poz06h2_q"/>`,
		"fallback": "material-symbols-light:auto-read-play",
	});
}

export default Component;
