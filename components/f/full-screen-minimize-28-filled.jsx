import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b3i3y1bhk {
  fill: currentColor;
  d: path("M9 2.5a1 1 0 0 1 1 1V7a3 3 0 0 1-3 3H3.5a1 1 0 0 1 0-2H7a1 1 0 0 0 1-1V3.5a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1V7a1 1 0 0 0 1 1h3.5a1 1 0 1 1 0 2H21a3 3 0 0 1-3-3V3.5a1 1 0 0 1 1-1M2.5 19a1 1 0 0 1 1-1H7a3 3 0 0 1 3 3v3.5a1 1 0 1 1-2 0V21a1 1 0 0 0-1-1H3.5a1 1 0 0 1-1-1M18 21a3 3 0 0 1 3-3h3.5a1 1 0 1 1 0 2H21a1 1 0 0 0-1 1v3.5a1 1 0 1 1-2 0z");
}
</style><path class="b3i3y1bhk"/>`,
		"fallback": "fluent:full-screen-minimize-28-filled",
	});
}

export default Component;
