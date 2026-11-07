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
		"content": `<style>.xm-6epbij {
  fill: currentColor;
  d: path("M7 3a1 1 0 0 1 2 0v1h6V3a1 1 0 0 1 2 0v1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5v10h4a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3Zm3 14a6 6 0 1 1 12 0a6 6 0 0 1-12 0m2 0a4 4 0 1 0 8 0a4 4 0 0 0-8 0m5-2v1h1a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0");
}
</style><path class="xm-6epbij"/>`,
		"fallback": "coolicons:calendar-clock-corner-fill-sharp",
	});
}

export default Component;
