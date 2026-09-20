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
		"content": `<style>.wrnxw_76y {
  fill: currentColor;
  d: path("M11.5 7a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m-.25-.994A5.5 5.5 0 0 0 6.602 14H4.5A2.5 2.5 0 0 1 2 11.5V6h9.25zM11.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 0-1h-1V9.5a.5.5 0 0 0-.5-.5M14 2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z");
}
</style><path class="wrnxw_76y"/>`,
		"fallback": "fluent:archive-clock-16-filled",
	});
}

export default Component;
