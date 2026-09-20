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
		"content": `<style>.ujjbk3b6k {
  fill: currentColor;
  d: path("M9.28 6.28a.75.75 0 0 0-1.06-1.06l-5 5a.75.75 0 0 0 0 1.06l5 5a.75.75 0 0 0 1.06-1.06L5.56 11.5h7.69a6.25 6.25 0 0 1 6.25 6.25v.5a.75.75 0 0 0 1.5 0v-.5A7.75 7.75 0 0 0 13.25 10H5.56z");
}
</style><path class="ujjbk3b6k"/>`,
		"fallback": "fluent:arrow-reply-24-regular",
	});
}

export default Component;
