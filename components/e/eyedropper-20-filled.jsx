import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e3gx9rbhc {
  fill: currentColor;
  d: path("M17.247 2.754a2.62 2.62 0 0 0-3.708 0L12.5 3.794l-.351-.352a1.5 1.5 0 0 0-2.121 0l-.586.586a1.5 1.5 0 0 0 0 2.122l.35.35l-6.353 6.354A1.5 1.5 0 0 0 3 13.914v.502l-.964 2.258c-.356.833.49 1.672 1.32 1.31L5.605 17h.48a1.5 1.5 0 0 0 1.062-.439l6.353-6.353l.353.353a1.5 1.5 0 0 0 2.122 0l.585-.586a1.5 1.5 0 0 0 0-2.121l-.353-.353l1.04-1.04a2.62 2.62 0 0 0 0-3.707M10.5 7.208L12.793 9.5l-6.354 6.353a.5.5 0 0 1-.353.146H5.5a.5.5 0 0 0-.2.042l-2.345 1.025l1.005-2.352a.5.5 0 0 0 .04-.197v-.603a.5.5 0 0 1 .147-.354z");
}
</style><path class="e3gx9rbhc"/>`,
		"fallback": "fluent:eyedropper-20-filled",
	});
}

export default Component;
