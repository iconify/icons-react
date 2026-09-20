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
		"content": `<style>.k9ys0ab6a {
  fill: currentColor;
  d: path("M4 21v-9.375L2.2 13L1 11.4l3-2.3V6h2v1.575L12 3l11 8.4l-1.2 1.575l-1.8-1.35V21h-7v-6h-2v6zM4 5q0-1.25.875-2.125T7 2q.425 0 .713-.288T8 1h2q0 1.25-.875 2.125T7 4q-.425 0-.712.288T6 5z");
}
</style><path class="k9ys0ab6a"/>`,
		"fallback": "material-symbols:cottage",
	});
}

export default Component;
