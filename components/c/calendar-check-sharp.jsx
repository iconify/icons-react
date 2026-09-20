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
		"content": `<style>.tb2oqdfvz {
  fill: currentColor;
  d: path("M3 22V4h3V2h2v2h8V2h2v2h3v8.375l-2 2V10H5v10h6.2l2 2zm13.55.5L13 18.95l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425z");
}
</style><path class="tb2oqdfvz"/>`,
		"fallback": "material-symbols:calendar-check-sharp",
	});
}

export default Component;
