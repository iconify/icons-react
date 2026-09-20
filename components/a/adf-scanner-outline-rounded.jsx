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
		"content": `<style>.xyiym1box {
  fill: currentColor;
  d: path("M2 18v-3q0-1.25.875-2.125T5 12h1V6q0-.825.588-1.412T8 4h8q.825 0 1.413.588T18 6v6h1q1.25 0 2.125.875T22 15v3q0 .825-.587 1.413T20 20H4q-.825 0-1.412-.587T2 18m6-6h8V6H8zm-4 6h16v-3q0-.425-.288-.712T19 14H5q-.425 0-.712.288T4 15zm14-1q.425 0 .713-.288T19 16t-.288-.712T18 15t-.712.288T17 16t.288.713T18 17M4 14h16z");
}
</style><path class="xyiym1box"/>`,
		"fallback": "material-symbols:adf-scanner-outline-rounded",
	});
}

export default Component;
