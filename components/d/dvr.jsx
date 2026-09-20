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
		"content": `<style>.whla3ybzk {
  fill: currentColor;
  d: path("M7.713 13.713Q8 13.425 8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14t.713-.288m0-4Q8 9.426 8 9t-.288-.712T7 8t-.712.288T6 9t.288.713T7 10t.713-.288M9 14h9v-2H9zm0-4h9V8H9zM8 21v-2H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v2z");
}
</style><path class="whla3ybzk"/>`,
		"fallback": "material-symbols:dvr",
	});
}

export default Component;
