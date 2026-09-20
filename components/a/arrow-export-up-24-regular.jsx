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
		"content": `<style>.gn4f9zb0n {
  fill: currentColor;
  d: path("M12.28 2.22a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 0 0 1.06 1.06L11 4.56v13.69a.75.75 0 0 0 1.5 0V4.56l3.72 3.72a.75.75 0 1 0 1.06-1.06zM5.25 20.5a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5z");
}
</style><path class="gn4f9zb0n"/>`,
		"fallback": "fluent:arrow-export-up-24-regular",
	});
}

export default Component;
