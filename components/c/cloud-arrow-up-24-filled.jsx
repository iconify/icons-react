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
		"content": `<style>.fooam4p6x {
  fill: currentColor;
  d: path("M6.08 8.02a6.001 6.001 0 0 1 11.84 0a4.5 4.5 0 0 1 4.053 4.973A6.5 6.5 0 0 0 10.018 17H6.5a4.5 4.5 0 0 1-.42-8.982M22 16.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-6 3a.5.5 0 0 0 1 0v-4.793l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 .708.708L16 14.707z");
}
</style><path class="fooam4p6x"/>`,
		"fallback": "fluent:cloud-arrow-up-24-filled",
	});
}

export default Component;
