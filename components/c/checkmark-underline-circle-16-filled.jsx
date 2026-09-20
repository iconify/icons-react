import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.huzok1_nz {
  fill: currentColor;
  d: path("M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m2.856-8.85a.52.52 0 0 1 0 .719L7.972 8.85a.484.484 0 0 1-.696 0L6.144 7.68a.52.52 0 0 1 0-.72a.48.48 0 0 1 .696 0l.784.81l2.536-2.62a.48.48 0 0 1 .696 0M6.5 10h2.998a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1 0-1");
}
</style><path class="huzok1_nz"/>`,
		"fallback": "fluent:checkmark-underline-circle-16-filled",
	});
}

export default Component;
