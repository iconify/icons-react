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
		"content": `<style>.pnrpd01kf {
  fill: currentColor;
  d: path("M3 22q-.825 0-1.412-.587T1 20V10q0-.425.288-.712T2 9t.713.288T3 10v10h16q.425 0 .713.288T20 21t-.288.713T19 22zm4-4q-.825 0-1.412-.587T5 16V6q0-.425.288-.712T6 5h4V3q0-.825.588-1.412T12 1h4q.825 0 1.413.588T18 3v2h4q.425 0 .713.288T23 6v10q0 .825-.587 1.413T21 18zm0-2h14V7H7zm5-11h4V3h-4zM7 16V7z");
}
</style><path class="pnrpd01kf"/>`,
		"fallback": "material-symbols:cases-outline-rounded",
	});
}

export default Component;
