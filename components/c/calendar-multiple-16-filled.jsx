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
		"content": `<style>.kr8gt8vpp {
  fill: currentColor;
  d: path("M2.05 4A2.5 2.5 0 0 1 4.5 2h5a2.5 2.5 0 0 1 2.45 2zM2 5v4.5A2.5 2.5 0 0 0 4.5 12h5A2.5 2.5 0 0 0 12 9.5V5zm4.5 9a2.5 2.5 0 0 1-2-1h5.25A3.25 3.25 0 0 0 13 9.75V4.5c.607.456 1 1.182 1 2v3.25A4.25 4.25 0 0 1 9.75 14z");
}
</style><path class="kr8gt8vpp"/>`,
		"fallback": "fluent:calendar-multiple-16-filled",
	});
}

export default Component;
