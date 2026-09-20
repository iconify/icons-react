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
		"content": `<style>.or-4niz0p {
  fill: currentColor;
  d: path("M3 22V4h3V2h2v2h8V2h2v2h3v8h-2v-2H5v10h9v2zm13.85 0q-.35 0-.6-.25t-.25-.6v-3.3q0-.35.25-.6t.6-.25H17v-1q0-.825.588-1.412T19 14t1.413.588T21 16v1h.15q.35 0 .6.25t.25.6v3.3q0 .35-.25.6t-.6.25zM18 17h2v-1q0-.425-.288-.712T19 15t-.712.288T18 16z");
}
</style><path class="or-4niz0p"/>`,
		"fallback": "material-symbols:calendar-lock-sharp",
	});
}

export default Component;
