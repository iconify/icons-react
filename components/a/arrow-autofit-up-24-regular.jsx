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
		"content": `<style>.hzxbarbue {
  fill: currentColor;
  d: path("M16.276 3.168a.75.75 0 0 1 1.004.052l2.5 2.5a.75.75 0 0 1-1.06 1.06L17.5 5.56v14.69a.75.75 0 0 1-1.5 0V5.56l-1.22 1.22a.75.75 0 0 1-1.06-1.06l2.5-2.5zM11.25 4a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h7a.75.75 0 0 1 0 1.5h-7A2.25 2.25 0 0 1 4 17.75V6.25A2.25 2.25 0 0 1 6.25 4z");
}
</style><path class="hzxbarbue"/>`,
		"fallback": "fluent:arrow-autofit-up-24-regular",
	});
}

export default Component;
