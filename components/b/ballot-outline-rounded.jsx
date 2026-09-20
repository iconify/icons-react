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
		"content": `<style>.ue5lq-m1s {
  fill: currentColor;
  d: path("M16 10q.425 0 .713-.288T17 9t-.288-.712T16 8h-3q-.425 0-.712.288T12 9t.288.713T13 10zm0 6q.425 0 .713-.288T17 15t-.288-.712T16 14h-3q-.425 0-.712.288T12 15t.288.713T13 16zm-5.587-5.587Q11 9.825 11 9t-.587-1.412T9 7t-1.412.588T7 9t.588 1.413T9 11t1.413-.587m0 6Q11 15.825 11 15t-.587-1.412T9 13t-1.412.588T7 15t.588 1.413T9 17t1.413-.587M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z");
}
</style><path class="ue5lq-m1s"/>`,
		"fallback": "material-symbols:ballot-outline-rounded",
	});
}

export default Component;
