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
		"content": `<style>.yiu2y7byd {
  fill: currentColor;
  d: path("M6 22V12H3V4h9v18zm8-8V2h1q2.5 0 4.25 1.75T21 8t-1.75 4.25T15 14z");
}
</style><path class="yiu2y7byd"/>`,
		"fallback": "material-symbols:earbud-left-sharp",
	});
}

export default Component;
