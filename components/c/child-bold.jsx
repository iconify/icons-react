import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ewh2w5bdh.css';
import '../../css/s/s3dypvbqn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ewh2w5bdh"/><path class="s3dypvbqn"/></g>`,
		"fallback": "glyphs:child-bold",
	});
}

export default Component;
