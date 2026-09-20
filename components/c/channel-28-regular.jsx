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
		"content": `<style>.da_7wfbeu {
  fill: currentColor;
  d: path("M2 8.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 0 0-3.5 0m1 2.646v9.354A4.25 4.25 0 0 0 7.25 25h13.5A4.25 4.25 0 0 0 25 20.75V7.25A4.25 4.25 0 0 0 20.75 3H7.25a4.25 4.25 0 0 0-4.082 3.062a2.76 2.76 0 0 1 1.55.113A2.75 2.75 0 0 1 7.25 4.5h13.5a2.75 2.75 0 0 1 2.75 2.75v13.5a2.75 2.75 0 0 1-2.75 2.75H7.25a2.75 2.75 0 0 1-2.75-2.75v-9.353a2.75 2.75 0 0 1-1.5 0M9.75 11a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM9 15.75a.75.75 0 0 1 .75-.75h5.75a.75.75 0 0 1 0 1.5H9.75a.75.75 0 0 1-.75-.75");
}
</style><path class="da_7wfbeu"/>`,
		"fallback": "fluent:channel-28-regular",
	});
}

export default Component;
