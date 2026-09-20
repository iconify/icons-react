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
		"content": `<style>.v__78tk2i {
  fill: currentColor;
  d: path("M5 14v6h14v-6zm0 8q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1q.425 0 .713.288T7 5t-.288.713T6 6H5v6h14V6h-1q-.425 0-.712-.288T17 5t.288-.712T18 4h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm6-16h-1q-.425 0-.712-.288T9 5t.288-.712T10 4h1V3q0-.425.288-.712T12 2t.713.288T13 3v1h1q.425 0 .713.288T15 5t-.288.713T14 6h-1v1q0 .425-.288.713T12 8t-.712-.288T11 7zm1 8v-2zm0 0");
}
</style><path class="v__78tk2i"/>`,
		"fallback": "material-symbols:add-row-above-outline-rounded",
	});
}

export default Component;
