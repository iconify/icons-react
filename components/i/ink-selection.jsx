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
		"content": `<style>.hepfycbki {
  fill: currentColor;
  d: path("M11 21V11h10v2h-6.6l6.6 6.6l-1.4 1.4l-6.6-6.6V21zm-4 0v-2h2v2zM5 5H3q0-.825.588-1.412T5 3zm2 0V3h2v2zm4 0V3h2v2zm4 0V3h2v2zm4 0V3q.825 0 1.413.588T21 5zM5 19v2q-.825 0-1.412-.587T3 19zm-2-2v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm16 0V7h2v2z");
}
</style><path class="hepfycbki"/>`,
		"fallback": "material-symbols:ink-selection",
	});
}

export default Component;
