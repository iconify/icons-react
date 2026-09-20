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
		"content": `<style>.g_mxupb-a {
  fill: currentColor;
  d: path("M9 17q-.825 0-1.412-.587T7 15V9q0-.825.588-1.412T9 7h6q.425 0 .713.288T16 8t-.288.713T15 9H9v6h5v-2h-1q-.425 0-.712-.288T12 12t.288-.712T13 11h2q.425 0 .713.288T16 12v3q0 .825-.587 1.413T14 17z");
}
</style><path class="g_mxupb-a"/>`,
		"fallback": "material-symbols:g-mobiledata-outline-rounded",
	});
}

export default Component;
