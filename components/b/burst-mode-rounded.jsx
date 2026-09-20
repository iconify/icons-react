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
		"content": `<style>.uwcc7mbde {
  fill: currentColor;
  d: path("M1 18V6q0-.425.288-.712T2 5t.713.288T3 6v12q0 .425-.288.713T2 19t-.712-.288T1 18m4 0V6q0-.425.288-.712T6 5t.713.288T7 6v12q0 .425-.288.713T6 19t-.712-.288T5 18m6 1q-.825 0-1.412-.587T9 17V7q0-.825.588-1.412T11 5h10q.825 0 1.413.588T23 7v10q0 .825-.587 1.413T21 19zm4.5-5l-1-1.325q-.15-.2-.4-.187t-.4.212l-1.125 1.5q-.2.25-.038.525T13 15h6q.3 0 .45-.275t-.05-.525l-1.6-2.175q-.15-.2-.4-.2t-.4.2z");
}
</style><path class="uwcc7mbde"/>`,
		"fallback": "material-symbols:burst-mode-rounded",
	});
}

export default Component;
