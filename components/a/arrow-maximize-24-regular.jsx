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
		"content": `<style>.r3fiplb-v {
  fill: currentColor;
  d: path("M19.25 4a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0V6.56L6.56 18.5h5.69a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v5.69L17.44 5.5h-5.69a.75.75 0 0 1 0-1.5z");
}
</style><path class="r3fiplb-v"/>`,
		"fallback": "fluent:arrow-maximize-24-regular",
	});
}

export default Component;
