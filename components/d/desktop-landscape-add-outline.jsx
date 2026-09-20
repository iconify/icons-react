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
		"content": `<style>.ixd6adczi {
  fill: currentColor;
  d: path("M4 18V6zm2-2v-5h9v5zm-2 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v6h-2V6H4v12h9v2zm12.5-8V9.5H9V8h9v4zM18 22v-3h-3v-2h3v-3h2v3h3v2h-3v3z");
}
</style><path class="ixd6adczi"/>`,
		"fallback": "material-symbols:desktop-landscape-add-outline",
	});
}

export default Component;
