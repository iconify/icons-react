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
		"content": `<style>.fmw7d_b6l {
  fill: currentColor;
  d: path("M6 16h12V8H6zm-2 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm4-6l2.125-2.825L11.5 13l1.875-2.5L16 14z");
}
</style><path class="fmw7d_b6l"/>`,
		"fallback": "material-symbols:image-inset",
	});
}

export default Component;
