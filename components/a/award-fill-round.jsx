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
		"content": `<style>.uj4-jzhoz {
  fill: currentColor;
  d: path("m15.14 15.258l.809 2.426c.13.392.182.805.152 1.217c-.054.772-.399 1.601-1.111 1.98c-.449.24-.983.24-1.437.013L12 20.118l-1.553.776a1.56 1.56 0 0 1-1.437-.013c-.712-.379-1.057-1.208-1.111-1.98a3.1 3.1 0 0 1 .152-1.217l.809-2.426A7.003 7.003 0 0 1 12 2a7.002 7.002 0 0 1 3.14 13.258");
}
</style><path class="uj4-jzhoz"/>`,
		"fallback": "coolicons:award-fill-round",
	});
}

export default Component;
