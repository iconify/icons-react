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
		"content": `<style>.ydu1jdi3j {
  fill: currentColor;
  d: path("M21.25 13a.75.75 0 0 1 0 1.5h-5.69l6.22 6.22a.75.75 0 1 1-1.06 1.06l-6.22-6.22v5.69a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75zm-11-11a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1 0-1.5h5.69L2.22 3.28a.75.75 0 1 1 1.06-1.06L9.5 8.44V2.75a.75.75 0 0 1 .75-.75");
}
</style><path class="ydu1jdi3j"/>`,
		"fallback": "fluent:arrow-minimize-top-left-bottom-right-24-regular",
	});
}

export default Component;
