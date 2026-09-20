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
		"content": `<style>.sjccut7cm {
  fill: currentColor;
  d: path("M3.72 6.28a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H1.75a.75.75 0 0 1 0-1.5h2.69zm8.56 0a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72h2.69a.75.75 0 0 0 0-1.5h-2.69z");
}
</style><path class="sjccut7cm"/>`,
		"fallback": "fluent:arrow-fit-in-16-filled",
	});
}

export default Component;
