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
		"content": `<style>.w0iflzkqp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 2L14 2L20 8L20 15.3431M14 2L14 8L20 8M4 4L4 22L20 22L20 20M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="w0iflzkqp"/>`,
		"fallback": "keyline-icons:file-off-sharp",
	});
}

export default Component;
