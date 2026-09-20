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
		"content": `<style>.w0dwdzbak {
  fill: currentColor;
  d: path("M5.25 19.45q-.575-.225-.913-.725T4 17.6V4q0-1.05.875-1.638T6.75 2.15l5.95 2.375q.575.225.938.738T14 6.4V20q0 1.05-.875 1.65t-1.875.2zM16 19V6.4q0-1.675-1.35-2.713T11.675 2H18q.825 0 1.413.588T20 4v13q0 .825-.587 1.413T18 19z");
}
</style><path class="w0dwdzbak"/>`,
		"fallback": "material-symbols:dual-screen",
	});
}

export default Component;
