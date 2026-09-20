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
		"content": `<style>.p1oobpb1y {
  fill: currentColor;
  d: path("M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12m2.856-8.85a.52.52 0 0 1 0 .719L7.972 8.85a.484.484 0 0 1-.696 0L6.144 7.68a.52.52 0 0 1 0-.72a.48.48 0 0 1 .696 0l.784.81l2.536-2.62a.48.48 0 0 1 .696 0M6 10.5a.5.5 0 0 1 .5-.5h2.998a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5");
}
</style><path class="p1oobpb1y"/>`,
		"fallback": "fluent:checkmark-underline-circle-16-regular",
	});
}

export default Component;
