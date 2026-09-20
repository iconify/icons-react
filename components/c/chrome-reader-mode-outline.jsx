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
		"content": `<style>.who-sgfqx {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h7V6H4zm9 0h7V6h-7zm1-3h5v-1.5h-5zm0-2.5h5V11h-5zm0-2.5h5V8.5h-5zM4 18V6z");
}
</style><path class="who-sgfqx"/>`,
		"fallback": "material-symbols:chrome-reader-mode-outline",
	});
}

export default Component;
