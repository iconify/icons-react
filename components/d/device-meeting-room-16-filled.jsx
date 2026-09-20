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
		"content": `<style>.qhx29xhhq {
  fill: currentColor;
  d: path("M2.739 3.459A2 2 0 0 1 4.665 2h6.67c.896 0 1.683.596 1.926 1.459l1.66 5.898A2.08 2.08 0 0 1 12.917 12H3.083a2.08 2.08 0 0 1-2.004-2.643zM4.497 13a.5.5 0 1 0 0 1h7.005a.5.5 0 1 0 0-1z");
}
</style><path class="qhx29xhhq"/>`,
		"fallback": "fluent:device-meeting-room-16-filled",
	});
}

export default Component;
