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
		"content": `<style>.k_7jgej-g {
  fill: currentColor;
  d: path("M6.257 9c.314.38.677.716 1.08 1H3.5a.5.5 0 0 1 0-1zM5.022 5a5.6 5.6 0 0 0 0 1H1.5a.5.5 0 0 1 0-1zm.478 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm5-3a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m1.854-6.354a.5.5 0 0 1 0 .708L11.207 5.5l1.147 1.146a.5.5 0 0 1-.708.708L10.5 6.207L9.354 7.354a.5.5 0 1 1-.708-.708L9.793 5.5L8.646 4.354a.5.5 0 1 1 .708-.708L10.5 4.793l1.146-1.147a.5.5 0 0 1 .708 0");
}
</style><path class="k_7jgej-g"/>`,
		"fallback": "fluent:filter-dismiss-16-regular",
	});
}

export default Component;
