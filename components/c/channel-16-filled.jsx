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
		"content": `<style>.raa829b7u {
  fill: currentColor;
  d: path("M2.5 4.553a.998.998 0 1 0 0 1.996a.998.998 0 0 0 0-1.996m0-1q-.165.001-.325.026A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5V7.487A2.002 2.002 0 0 0 4.498 5.55A2 2 0 0 0 2.5 3.553m3 2.947A.5.5 0 0 0 6 7h4a.5.5 0 1 0 0-1H6a.5.5 0 0 0-.5.5m0 3a.5.5 0 0 0 .5.5h2.614a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5");
}
</style><path class="raa829b7u"/>`,
		"fallback": "fluent:channel-16-filled",
	});
}

export default Component;
