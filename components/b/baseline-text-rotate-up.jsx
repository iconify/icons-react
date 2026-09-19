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
		"content": `<style>.veiga2zyu {
  fill: currentColor;
  d: path("M3 12v1.5l11 4.75v-2.1l-2.2-.9v-5l2.2-.9v-2.1zm7 2.62l-5.02-1.87L10 10.88zm8-10.37l-3 3h2v12.5h2V7.25h2z");
}
</style><path class="veiga2zyu"/>`,
		"fallback": "ic:baseline-text-rotate-up",
	});
}

export default Component;
