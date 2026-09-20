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
		"content": `<style>.ivxv2tbbn {
  fill: currentColor;
  d: path("M7 22v-6H3v-4l8-3.55V7.8q-.9-.325-1.45-1.088T9 5q0-1.25.875-2.125T12 2t2.125.875T15 5h-2q0-.425-.288-.712T12 4t-.712.288T11 5t.288.713T12 6h1v2.45L21 12v4h-4v6zm-2-8h2v-1h10v1h2v-.7l-7-3.1l-7 3.1z");
}
</style><path class="ivxv2tbbn"/>`,
		"fallback": "material-symbols:dry-cleaning-sharp",
	});
}

export default Component;
