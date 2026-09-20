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
		"content": `<style>.l_pw-5bec {
  fill: currentColor;
  d: path("M19 22q-1.65 0-2.825-1.175T15 18v-4.5q0-1.05.725-1.775T17.5 11t1.775.725T20 13.5V18h-2v-4.5q0-.2-.15-.35T17.5 13t-.35.15t-.15.35V18q0 .825.588 1.413T19 20t1.413-.587T21 18v-4h2v4q0 1.65-1.175 2.825T19 22M3 18q-.825 0-1.412-.587T1 16V4q0-.825.588-1.412T3 2h16q.825 0 1.413.588T21 4v6h-3.5q-1.45 0-2.475 1.025T14 13.5V18zm8-7l8-5V4l-8 5l-8-5v2z");
}
</style><path class="l_pw-5bec"/>`,
		"fallback": "material-symbols:attach-email",
	});
}

export default Component;
