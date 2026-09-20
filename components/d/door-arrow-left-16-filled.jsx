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
		"content": `<style>.xeykfhrfr {
  fill: currentColor;
  d: path("M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.457A5.5 5.5 0 0 0 7.257 15H4.75A1.75 1.75 0 0 1 3 13.25zM6 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m10 2.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-6.853-.354l-.003.003a.5.5 0 0 0-.144.348v.006a.5.5 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L10.707 12H13.5a.5.5 0 0 0 0-1h-2.793l1.147-1.146a.5.5 0 0 0-.708-.708z");
}
</style><path class="xeykfhrfr"/>`,
		"fallback": "fluent:door-arrow-left-16-filled",
	});
}

export default Component;
