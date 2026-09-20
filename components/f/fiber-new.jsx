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
		"content": `<style>.vejf9_bin {
  fill: currentColor;
  d: path("M3 20q-.825 0-1.412-.587T1 18V6q0-.825.588-1.412T3 4h18q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20zm.5-5h1.25v-3.5L7.3 15h1.2V9H7.25v3.5L4.75 9H3.5zm6 0h4v-1.25H11v-1.1h2.5V11.4H11v-1.15h2.5V9h-4zm6 0h4q.425 0 .713-.288T20.5 14V9h-1.25v4.5h-1.1V10H16.9v3.5h-1.15V9H14.5v5q0 .425.288.713T15.5 15");
}
</style><path class="vejf9_bin"/>`,
		"fallback": "material-symbols:fiber-new",
	});
}

export default Component;
