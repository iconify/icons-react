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
		"content": `<style>.yngf_obkb {
  fill: currentColor;
  d: path("M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v4h-2V6H7v12h10v-1h2v4q0 .825-.587 1.413T17 23zm10.15-10H12v3h-2v-3q0-.825.588-1.412T12 11h5.15L15.6 9.4L17 8l4 4l-4 4l-1.4-1.4z");
}
</style><path class="yngf_obkb"/>`,
		"fallback": "material-symbols:app-shortcut",
	});
}

export default Component;
