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
		"content": `<style>.l9kk8xt_a {
  fill: currentColor;
  d: path("M12 3L4.2 15.5l1.7 1.06L7 14.8V21h4v-5h2v5h4v-6.21l1.1 1.77l1.7-1.06zm1 11h-2v-2h2z");
}
</style><path class="l9kk8xt_a"/>`,
		"fallback": "ic:baseline-bungalow",
	});
}

export default Component;
