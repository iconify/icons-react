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
		"content": `<style>.slx4rzbxr {
  fill: currentColor;
  d: path("M21 6a1 1 0 0 1 1 1v4a1 1 0 0 1-.168.555l-4 6A1 1 0 0 1 17 18H7a1 1 0 0 1-.832-.445l-4-6A1 1 0 0 1 2 11V7a1 1 0 0 1 1-1ZM8 10a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z");
}
</style><path class="slx4rzbxr"/>`,
		"fallback": "coolicons:hdmi-fill-sharp",
	});
}

export default Component;
