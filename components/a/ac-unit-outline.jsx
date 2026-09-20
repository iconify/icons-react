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
		"content": `<style>.oxug9cbsd {
  fill: currentColor;
  d: path("M11 22v-4.15l-3.25 3.2l-1.4-1.4L11 15v-2H9l-4.65 4.65l-1.4-1.4L6.15 13H2v-2h4.15l-3.2-3.25l1.4-1.4L9 11h2V9L6.35 4.35l1.4-1.4L11 6.15V2h2v4.15l3.25-3.2l1.4 1.4L13 9v2h2l4.65-4.65l1.4 1.4l-3.2 3.25H22v2h-4.15l3.2 3.25l-1.4 1.4L15 13h-2v2l4.65 4.65l-1.4 1.4l-3.25-3.2V22z");
}
</style><path class="oxug9cbsd"/>`,
		"fallback": "material-symbols:ac-unit-outline",
	});
}

export default Component;
