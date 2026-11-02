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
		"content": `<style>.r9hcurb1d {
  fill: currentColor;
  d: path("M3 20V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1m12-9H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="r9hcurb1d"/>`,
		"fallback": "coolicons:checkbox-partial-fill-sharp",
	});
}

export default Component;
