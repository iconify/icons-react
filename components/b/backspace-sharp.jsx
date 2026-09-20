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
		"content": `<style>.fd7zerbvz {
  fill: currentColor;
  d: path("m11.4 16l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6zM8 20l-6-8l6-8h14v16z");
}
</style><path class="fd7zerbvz"/>`,
		"fallback": "material-symbols:backspace-sharp",
	});
}

export default Component;
