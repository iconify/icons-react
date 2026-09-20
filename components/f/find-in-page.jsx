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
		"content": `<style>.hey3zxb2v {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h9l5 6v11.65L15.45 15q.275-.425.413-.925T16 13q0-1.65-1.175-2.825T12 9t-2.825 1.175T8 13t1.175 2.825T12 17q.575 0 1.075-.137T14 16.45l5.2 5.15q-.575.25-1.2.325T16.75 22zm4.588-7.587Q10 13.825 10 13t.588-1.412T12 11t1.413.588T14 13t-.587 1.413T12 15t-1.412-.587");
}
</style><path class="hey3zxb2v"/>`,
		"fallback": "material-symbols:find-in-page",
	});
}

export default Component;
