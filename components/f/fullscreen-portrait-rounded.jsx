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
		"content": `<style>.qd0u_bc0n {
  fill: currentColor;
  d: path("M9 18h6q.425 0 .713-.288T16 17V7q0-.425-.288-.712T15 6H9q-.425 0-.712.288T8 7v10q0 .425.288.713T9 18m11 2q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4z");
}
</style><path class="qd0u_bc0n"/>`,
		"fallback": "material-symbols:fullscreen-portrait-rounded",
	});
}

export default Component;
