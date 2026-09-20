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
		"content": `<style>.tzc8khbbt {
  fill: currentColor;
  d: path("M6 19h12v-2H6zm0-4h12v-2H6zm0-4h12v-.9L16.55 9h-9.1L6 10.1zm4.05-4h3.9L12 5.525zM4 21v-9.375L2.2 13L1 11.4l3-2.3V6h2v1.575L12 3l11 8.4l-1.2 1.575l-1.8-1.35V21zM4 5q0-1.25.875-2.125T7 2q.425 0 .713-.288T8 1h2q0 1.25-.875 2.125T7 4q-.425 0-.712.288T6 5z");
}
</style><path class="tzc8khbbt"/>`,
		"fallback": "material-symbols:cabin",
	});
}

export default Component;
