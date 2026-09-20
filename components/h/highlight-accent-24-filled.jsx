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
		"content": `<style>.i1flj2jew {
  fill: currentColor;
  d: path("M20.003 4L20 7.75l-.007.102a.754.754 0 0 1-.71.648H4.737l-.089-.006A.75.75 0 0 1 4 7.751V4zm-4.496 9.5H8.5V21l6.576-3.106a.75.75 0 0 0 .424-.572l.008-.107z");
}
</style><path class="i1flj2jew"/>`,
		"fallback": "fluent:highlight-accent-24-filled",
	});
}

export default Component;
